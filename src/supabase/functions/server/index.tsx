import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "jsr:@supabase/supabase-js@2.49.8";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-8bb848e7/health", (c) => {
  return c.json({ status: "ok" });
});

// GET Data (Public)
app.get("/make-server-8bb848e7/data/:key", async (c) => {
  const key = c.req.param("key");
  try {
    const value = await kv.get(key);
    return c.json({ value });
  } catch (e) {
    return c.json({ error: e.message }, 500);
  }
});

// POST Data (Protected)
app.post("/make-server-8bb848e7/data/:key", async (c) => {
  const authHeader = c.req.header('Authorization');
  if (!authHeader) return c.text('Unauthorized', 401);
  const token = authHeader.split(' ')[1];
  
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '', 
  );
  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (!user) return c.text('Unauthorized', 401);

  const key = c.req.param("key");
  const body = await c.req.json();
  
  try {
    await kv.set(key, body.value);
    return c.json({ success: true });
  } catch (e) {
    return c.json({ error: e.message }, 500);
  }
});

// Signup Route
app.post("/make-server-8bb848e7/signup", async (c) => {
  const { email, password } = await c.req.json();
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
  );
  
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true
  });
  
  if (error) return c.json({ error: error.message }, 400);
  return c.json({ user: data.user });
});

// Reset Admin Password (Demo Utility)
app.post("/make-server-8bb848e7/reset-admin-password", async (c) => {
  const { password } = await c.req.json();
  const email = 'admin@startinproduct.com';
  
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
  );
  
  // Find user by email - handle pagination better
  const { data: { users }, error: listError } = await supabase.auth.admin.listUsers({ perPage: 1000 });
  if (listError) return c.json({ error: listError.message }, 500);
  
  const adminUser = users.find(u => u.email === email);
  
  if (!adminUser) {
    // If not found, create it
    const { data, error: createError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true
    });
    if (createError) return c.json({ error: createError.message }, 400);
    return c.json({ message: "Admin user created" });
  }
  
  // Update password
  const { error: updateError } = await supabase.auth.admin.updateUserById(adminUser.id, {
    password: password
  });
  
  if (updateError) return c.json({ error: updateError.message }, 400);
  
  return c.json({ message: "Admin password updated" });
});

// Translation Endpoint
app.post("/make-server-8bb848e7/translate", async (c) => {
  const authHeader = c.req.header('Authorization');
  if (!authHeader) return c.text('Unauthorized', 401);
  const token = authHeader.split(' ')[1];
  
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '', 
  );
  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (!user) return c.text('Unauthorized', 401);

  const { content, targetLang } = await c.req.json();
  const apiKey = Deno.env.get('OPENAI_API_KEY');

  if (!apiKey) {
    return c.json({ error: "OpenAI API Key not configured" }, 500);
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `You are a professional translator. Translate the given JSON object values to ${targetLang}. 
            Preserve all keys and the structure exactly. 
            Do not translate proper nouns if they are standard terms (like 'Product Management' can be translated but 'React' or 'Jira' should stay).
            For 'goals', 'topics', and 'resources' arrays, translate each string item or object property accordingly.
            Return ONLY the JSON.`
          },
          {
            role: "user",
            content: JSON.stringify(content)
          }
        ],
        response_format: { type: "json_object" }
      })
    });

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message);
    }

    const translatedContent = JSON.parse(data.choices[0].message.content);
    return c.json({ value: translatedContent });

  } catch (e) {
    console.error("Translation error:", e);
    return c.json({ error: e.message }, 500);
  }
});

Deno.serve(app.fetch);
