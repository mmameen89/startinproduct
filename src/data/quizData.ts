import { Search, Palette, Lightbulb, PenTool } from 'lucide-react';

export const quizData = {
  en: {
    questions: [
      {
        id: 1,
        question: "How do you prefer solving problems?",
        options: [
          { value: 'C', text: "By analyzing data, setting priorities, and making strategic decisions", path: "Product Management" },
          { value: 'B', text: "By sketching ideas, creating visual solutions, and designing interfaces", path: "Product Design" },
          { value: 'A', text: "By understanding users deeply, uncovering insights, and validating assumptions", path: "User Research" },
          { value: 'D', text: "By simplifying complex concepts, choosing the right words, and structuring information", path: "UX Writing" },
        ]
      },
      {
        id: 2,
        question: "What type of work energizes you the most?",
        options: [
          { value: 'C', text: "Defining strategy, coordinating teams, and driving product vision", path: "Product Management" },
          { value: 'B', text: "Designing screens, building prototypes, and crafting user experiences", path: "Product Design" },
          { value: 'A', text: "Conducting interviews, analyzing behavior, and discovering patterns", path: "User Research" },
          { value: 'D', text: "Crafting clear copy, defining voice and tone, and creating content strategies", path: "UX Writing" },
        ]
      },
      {
        id: 3,
        question: "What kind of deliverables do you enjoy creating?",
        options: [
          { value: 'C', text: "Product roadmaps, PRDs, feature briefs, and strategy documents", path: "Product Management" },
          { value: 'B', text: "Wireframes, mockups, prototypes, and design systems", path: "Product Design" },
          { value: 'A', text: "Research reports, user personas, journey maps, and insights summaries", path: "User Research" },
          { value: 'D', text: "Content guidelines, voice & tone guides, interface copy, and microcopy", path: "UX Writing" },
        ]
      },
      {
        id: 4,
        question: "How do you prefer to collaborate with teams?",
        options: [
          { value: 'C', text: "Leading meetings, aligning stakeholders, and making trade-off decisions", path: "Product Management" },
          { value: 'B', text: "Translating ideas into visuals and working closely with developers", path: "Product Design" },
          { value: 'A', text: "Supporting decisions with evidence and advocating for user needs", path: "User Research" },
          { value: 'D', text: "Ensuring clarity in communication and collaborating on content structure", path: "UX Writing" },
        ]
      },
      {
        id: 5,
        question: "What skills do you want to develop most?",
        options: [
          { value: 'C', text: "Strategic thinking, stakeholder management, and business acumen", path: "Product Management" },
          { value: 'B', text: "Visual design, interaction design, and prototyping skills", path: "Product Design" },
          { value: 'A', text: "Research methodologies, data analysis, and behavioral psychology", path: "User Research" },
          { value: 'D', text: "Microcopy writing, content strategy, and information architecture", path: "UX Writing" },
        ]
      },
      {
        id: 6,
        question: "When working on a project, you're most interested in:",
        options: [
          { value: 'C', text: "Understanding the business goals and defining what success looks like", path: "Product Management" },
          { value: 'B', text: "Creating an intuitive, beautiful experience that users will love", path: "Product Design" },
          { value: 'A', text: "Understanding why users behave the way they do and what they need", path: "User Research" },
          { value: 'D', text: "Ensuring the product speaks the user's language and is easy to understand", path: "UX Writing" },
        ]
      },
      {
        id: 7,
        question: "Your ideal work environment involves:",
        options: [
          { value: 'C', text: "Cross-functional collaboration, strategic planning sessions, and data analysis", path: "Product Management" },
          { value: 'B', text: "Creative exploration, design tools, and visual problem-solving", path: "Product Design" },
          { value: 'A', text: "User interviews, observation sessions, and synthesizing insights", path: "User Research" },
          { value: 'D', text: "Collaborating on copy reviews, content audits, and refining product messaging", path: "UX Writing" },
        ]
      },
      {
        id: 8,
        question: "How do you make decisions?",
        options: [
          { value: 'C', text: "By weighing business impact, technical feasibility, and user value", path: "Product Management" },
          { value: 'B', text: "By considering usability principles, visual hierarchy, and user flow", path: "Product Design" },
          { value: 'A', text: "By gathering evidence, analyzing user feedback, and testing assumptions", path: "User Research" },
          { value: 'D', text: "By assessing clarity, comprehension, and alignment with brand voice", path: "UX Writing" },
        ]
      },
      {
        id: 9,
        question: "What frustrates you most in product development?",
        options: [
          { value: 'C', text: "Lack of clear strategy, misaligned priorities, or poor execution", path: "Product Management" },
          { value: 'B', text: "Confusing interfaces, poor visual design, or bad user experience", path: "Product Design" },
          { value: 'A', text: "Building without understanding users or ignoring research insights", path: "User Research" },
          { value: 'D', text: "Ambiguous language, jargon, and confusing instructions", path: "UX Writing" },
        ]
      },
      {
        id: 10,
        question: "Your natural strengths include:",
        options: [
          { value: 'C', text: "Big-picture thinking, communication, and decision-making under pressure", path: "Product Management" },
          { value: 'B', text: "Visual thinking, attention to detail, and creative problem-solving", path: "Product Design" },
          { value: 'A', text: "Active listening, pattern recognition, and empathy for users", path: "User Research" },
          { value: 'D', text: "Simplifying complexity, empathy through words, and precise communication", path: "UX Writing" },
        ]
      },
      {
        id: 11,
        question: "In meetings, you typically:",
        options: [
          { value: 'C', text: "Drive the agenda, facilitate discussion, and ensure decisions are made", path: "Product Management" },
          { value: 'B', text: "Sketch ideas, present visual concepts, and discuss design solutions", path: "Product Design" },
          { value: 'A', text: "Share user insights, present research findings, and ask probing questions", path: "User Research" },
          { value: 'D', text: "Ask for clarification on terminology and ensure everyone understands the same thing", path: "UX Writing" },
        ]
      },
      {
        id: 12,
        question: "What type of content do you enjoy consuming?",
        options: [
          { value: 'C', text: "Business strategy, product case studies, and tech industry trends", path: "Product Management" },
          { value: 'B', text: "Design inspiration, UI patterns, and creative portfolios", path: "Product Design" },
          { value: 'A', text: "Behavioral psychology, research methodologies, and user behavior studies", path: "User Research" },
          { value: 'D', text: "Style guides, brand voice examples, and content strategy articles", path: "UX Writing" },
        ]
      },
      {
        id: 13,
        question: "How do you measure success in your work?",
        options: [
          { value: 'C', text: "Achieving business goals, shipping features on time, and user adoption metrics", path: "Product Management" },
          { value: 'B', text: "Creating delightful experiences, positive user feedback, and design quality", path: "Product Design" },
          { value: 'A', text: "Uncovering valuable insights, influencing decisions, and improving user understanding", path: "User Research" },
          { value: 'D', text: "Clarity of communication, reduced support tickets, and increased comprehension", path: "UX Writing" },
        ]
      },
      {
        id: 14,
        question: "What would you rather spend your time doing?",
        options: [
          { value: 'C', text: "Analyzing market opportunities and building product roadmaps", path: "Product Management" },
          { value: 'B', text: "Designing interfaces and iterating on visual solutions", path: "Product Design" },
          { value: 'A', text: "Talking to users and synthesizing research findings", path: "User Research" },
          { value: 'D', text: "Refining copy, creating content flows, and ensuring consistency", path: "UX Writing" },
        ]
      },
      {
        id: 15,
        question: "Your ideal project outcome is:",
        options: [
          { value: 'C', text: "A successful product launch that meets business objectives", path: "Product Management" },
          { value: 'B', text: "A beautiful, intuitive product that users love to interact with", path: "Product Design" },
          { value: 'A', text: "Deep user understanding that drives better product decisions", path: "User Research" },
          { value: 'D', text: "A seamless experience where users know exactly what to do without confusion", path: "UX Writing" },
        ]
      },
      {
        id: 16,
        question: "When learning something new, you prefer:",
        options: [
          { value: 'C', text: "Understanding frameworks, reading case studies, and learning from real examples", path: "Product Management" },
          { value: 'B', text: "Hands-on practice, visual tutorials, and building actual projects", path: "Product Design" },
          { value: 'A', text: "Understanding theory, reading research papers, and analyzing methodologies", path: "User Research" },
          { value: 'D', text: "Reading guidelines, understanding principles of clear communication, and analyzing copy", path: "UX Writing" },
        ]
      },
      {
        id: 17,
        question: "What excites you most about working in tech?",
        options: [
          { value: 'C', text: "Building products that solve real problems and create business value", path: "Product Management" },
          { value: 'B', text: "Crafting experiences that people enjoy using every day", path: "Product Design" },
          { value: 'A', text: "Understanding people and making products more user-centered", path: "User Research" },
          { value: 'D', text: "Humanizing technology and making it accessible through language", path: "UX Writing" },
        ]
      },
      {
        id: 18,
        question: "How comfortable are you with ambiguity?",
        options: [
          { value: 'C', text: "Very comfortable—I enjoy making decisions with incomplete information", path: "Product Management" },
          { value: 'B', text: "Moderately comfortable—I like exploring options through design iterations", path: "Product Design" },
          { value: 'A', text: "I prefer to reduce ambiguity through research and user validation", path: "User Research" },
          { value: 'D', text: "I like bringing structure to ambiguity through clear definitions and language", path: "UX Writing" },
        ]
      },
      {
        id: 19,
        question: "What role do you naturally take in group projects?",
        options: [
          { value: 'C', text: "The organizer who coordinates, sets direction, and keeps everyone aligned", path: "Product Management" },
          { value: 'B', text: "The creator who brings ideas to life visually and designs solutions", path: "Product Design" },
          { value: 'A', text: "The investigator who asks questions, gathers input, and provides insights", path: "User Research" },
          { value: 'D', text: "The editor who clarifies ideas, ensures consistency, and polishes the final output", path: "UX Writing" },
        ]
      },
      {
        id: 20,
        question: "Looking 2-3 years ahead, you see yourself:",
        options: [
          { value: 'C', text: "Leading product strategy, managing product launches, and driving business growth", path: "Product Management" },
          { value: 'B', text: "Mastering design tools, building portfolios, and creating exceptional UX", path: "Product Design" },
          { value: 'A', text: "Running complex research studies, influencing product direction with insights", path: "User Research" },
          { value: 'D', text: "Leading content strategy, defining brand voice, and championing clarity", path: "UX Writing" },
        ]
      },
    ],
    results: {
      A: {
        title: "You're a great fit for User Research",
        subtitle: "You enjoy understanding people deeply and turning insights into decisions.",
        description: "Based on your responses, you show a strong inclination toward understanding user behavior, gathering insights, and making data-driven recommendations. You're naturally curious, empathetic, and analytical—all essential qualities for a successful User Researcher.",
        path: '/user-research',
        color: 'green',
        icon: Search,
        strengths: [
          "Strong curiosity about human behavior and motivations",
          "Analytical mindset with focus on evidence-based decisions",
          "Natural empathy and listening skills",
          "Interest in methodologies and structured research approaches"
        ]
      },
      B: {
        title: "You're a great fit for Product Design (UX/UI)",
        subtitle: "You think visually and enjoy designing intuitive digital experiences.",
        description: "Based on your responses, you demonstrate strong visual thinking, creativity, and a passion for creating user-centered experiences. You naturally think about usability, aesthetics, and how people interact with products.",
        path: '/product-design',
        color: 'purple',
        icon: Palette,
        strengths: [
          "Visual and creative problem-solving abilities",
          "Strong attention to detail and aesthetics",
          "User-centered design thinking",
          "Interest in hands-on creation and iteration"
        ]
      },
      C: {
        title: "You're a great fit for Product Management",
        subtitle: "You enjoy ownership, strategy, and solving complex problems.",
        description: "Based on your responses, you show strong strategic thinking, leadership qualities, and an ability to balance multiple stakeholders. You naturally think about business goals, priorities, and how to drive product success.",
        path: '/product-management',
        color: 'blue',
        icon: Lightbulb,
        strengths: [
          "Strategic thinking and big-picture perspective",
          "Strong communication and stakeholder management",
          "Comfort with decision-making under uncertainty",
          "Interest in business, technology, and user needs"
        ]
      },
      D: {
        title: "You're a great fit for UX Writing",
        subtitle: "You enjoy simplifying complexity and designing with words.",
        description: "Based on your responses, you show a strong appreciation for clarity, structure, and the power of words. You understand that language is a core part of the user experience and enjoy finding the perfect way to explain complex concepts.",
        path: '/ux-writing',
        color: 'rose',
        icon: PenTool,
        strengths: [
          "Ability to simplify complex concepts into clear language",
          "Strong empathy expressed through tone and voice",
          "Structural thinking and information architecture skills",
          "Passion for consistency and clear communication"
        ]
      }
    }
  },
  ar: {
    questions: [
      {
        id: 1,
        question: "بتحب تحل المشاكل إزاي؟",
        options: [
          { value: 'C', text: "بتحليل البيانات، تحديد الأولويات، واتخاذ قرارات استراتيجية", path: "إدارة المنتجات" },
          { value: 'B', text: "بالرسم (Sketching)، ابتكار حلول مرئية، وتصميم واجهات", path: "تصميم المنتجات" },
          { value: 'A', text: "بفهم المستخدمين بعمق، اكتشاف الرؤى (Insights)، والتحقق من الفرضيات", path: "أبحاث المستخدمين" },
          { value: 'D', text: "بتبسيط المفاهيم المعقدة، اختيار الكلام الصح، وتنظيم المعلومات", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 2,
        question: "إيه نوع الشغل اللي بيديك طاقة؟",
        options: [
          { value: 'C', text: "تحديد الاستراتيجية، التنسيق بين الفرق، وقيادة رؤية المنتج", path: "إدارة المنتجات" },
          { value: 'B', text: "تصميم الشاشات، بناء النماذج الأولية (Prototypes)، وصناعة تجارب المستخدم", path: "تصميم المنتجات" },
          { value: 'A', text: "إجراء المقابلات، تحليل السلوك، واكتشاف الأنماط", path: "أبحاث المستخدمين" },
          { value: 'D', text: "صياغة نصوص واضحة، تحديد نبرة الصوت (Tone of Voice)، وبناء استراتيجية المحتوى", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 3,
        question: "إيه نوع المخرجات (Deliverables) اللي بتستمتع بعملها؟",
        options: [
          { value: 'C', text: "خرائط الطريق (Roadmaps)، مستندات المتطلبات (PRDs)، ووثائق الاستراتيجية", path: "إدارة المنتجات" },
          { value: 'B', text: "Wireframes، تصميمات نهائية (Mockups)، وأنظمة التصميم", path: "تصميم المنتجات" },
          { value: 'A', text: "تقارير البحث، شخصيات المستخدمين (Personas)، وخرائط الرحلة (Journey Maps)", path: "أبحاث المستخدمين" },
          { value: 'D', text: "أدلة المحتوى، إرشادات النبرة، نصوص الواجهة، والـ Microcopy", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 4,
        question: "بتفضل تتعاون مع الفرق إزاي؟",
        options: [
          { value: 'C', text: "قيادة الاجتماعات، توحيد أصحاب المصلحة، واتخاذ قرارات المفاضلة", path: "إدارة المنتجات" },
          { value: 'B', text: "ترجمة الأفكار لصور مرئية والعمل عن قرب مع المطورين", path: "تصميم المنتجات" },
          { value: 'A', text: "دعم القرارات بالأدلة والدفاع عن احتياجات المستخدمين", path: "أبحاث المستخدمين" },
          { value: 'D', text: "ضمان وضوح التواصل والتعاون على هيكلة المحتوى داخل المنتج", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 5,
        question: "إيه المهارات اللي عايز تطورها أكتر؟",
        options: [
          { value: 'C', text: "التفكير الاستراتيجي، إدارة أصحاب المصلحة، وفهم البيزنس", path: "إدارة المنتجات" },
          { value: 'B', text: "التصميم المرئي، تصميم التفاعل، ومهارات الـ Prototyping", path: "تصميم المنتجات" },
          { value: 'A', text: "منهجيات البحث، تحليل البيانات، وعلم النفس السلوكي", path: "أبحاث المستخدمين" },
          { value: 'D', text: "كتابة الـ Microcopy، استراتيجية المحتوى، وهندسة المعلومات", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 6,
        question: "لما تشتغل على مشروع، إيه أكتر حاجة بتهمك؟",
        options: [
          { value: 'C', text: "فهم أهداف البيزنس وتحديد معنى النجاح", path: "إدارة المنتجات" },
          { value: 'B', text: "خلق تجربة بديهية وجميلة المستخدمين يحبوها", path: "تصميم المنتجات" },
          { value: 'A', text: "فهم ليه المستخدمين بيتصرفوا بالشكل ده وإيه احتياجاتهم", path: "أبحاث المستخدمين" },
          { value: 'D', text: "التأكد إن المنتج بيكلم المستخدم بلغته ومفهوم بسهولة", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 7,
        question: "بيئة العمل المثالية ليك فيها:",
        options: [
          { value: 'C', text: "تعاون بين فرق مختلفة، جلسات تخطيط استراتيجي، وتحليل بيانات", path: "إدارة المنتجات" },
          { value: 'B', text: "استكشاف إبداعي، أدوات تصميم، وحل مشاكل بشكل مرئي", path: "تصميم المنتجات" },
          { value: 'A', text: "مقابلات مستخدمين، جلسات ملاحظة، وتجميع الرؤى", path: "أبحاث المستخدمين" },
          { value: 'D', text: "التعاون في مراجعة النصوص، تدقيق المحتوى، وتحسين رسائل المنتج", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 8,
        question: "إزاي بتاخد قرارات؟",
        options: [
          { value: 'C', text: "بموازنة تأثير البيزنس، الجدوى التقنية، وقيمة المستخدم", path: "إدارة المنتجات" },
          { value: 'B', text: "بمراعاة مبادئ قابلية الاستخدام، التسلسل البصري، وتدفق المستخدم", path: "تصميم المنتجات" },
          { value: 'A', text: "بجمع الأدلة، تحليل فيدباك المستخدمين، واختبار الافتراضات", path: "أبحاث المستخدمين" },
          { value: 'D', text: "بتقييم الوضوح، سهولة الفهم، والتوافق مع نبرة البراند", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 9,
        question: "إيه أكتر حاجة بتحبطك في تطوير المنتجات؟",
        options: [
          { value: 'C', text: "غياب استراتيجية واضحة، أولويات مش متناسقة، أو تنفيذ سيء", path: "إدارة المنتجات" },
          { value: 'B', text: "واجهات مربكة، تصميم مرئي ضعيف، أو تجربة مستخدم سيئة", path: "تصميم المنتجات" },
          { value: 'A', text: "البناء بدون فهم المستخدمين أو تجاهل نتائج البحث", path: "أبحاث المستخدمين" },
          { value: 'D', text: "اللغة الغامضة، المصطلحات المعقدة، والتعليمات المشوشة", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 10,
        question: "نقاط قوتك الطبيعية بتشمل:",
        options: [
          { value: 'C', text: "التفكير الشمولي، التواصل، واتخاذ القرارات تحت ضغط", path: "إدارة المنتجات" },
          { value: 'B', text: "التفكير البصري، الاهتمام بالتفاصيل، وحل المشاكل بإبداع", path: "تصميم المنتجات" },
          { value: 'A', text: "الاستماع النشط، التعرف على الأنماط، والتعاطف مع المستخدمين", path: "أبحاث المستخدمين" },
          { value: 'D', text: "تبسيط التعقيد، التعاطف من خلال الكلمات، والدقة في التعبير", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 11,
        question: "في الاجتماعات، انت عادة:",
        options: [
          { value: 'C', text: "بتقود الأجندة، بتدير المناقشة، وبتتأكد إن القرارات اتاخدت", path: "إدارة المنتجات" },
          { value: 'B', text: "بترسم أفكار، بتعرض مفاهيم بصرية، وبتناقش حلول التصميم", path: "تصميم المنتجات" },
          { value: 'A', text: "بتشارك رؤى المستخدمين، بتعرض نتائج البحث، وبتسأل أسئلة عميقة", path: "أبحاث المستخدمين" },
          { value: 'D', text: "بتستوضح المصطلحات وبتتأكد إن الكل فاهم نفس المعنى", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 12,
        question: "إيه نوع المحتوى اللي بتستمتع بيه؟",
        options: [
          { value: 'C', text: "استراتيجية البيزنس، دراسات حالة للمنتجات، واتجاهات التكنولوجيا", path: "إدارة المنتجات" },
          { value: 'B', text: "إلهام التصميم، أنماط الواجهات (UI Patterns)، والبورتفوليو الإبداعي", path: "تصميم المنتجات" },
          { value: 'A', text: "علم النفس السلوكي، منهجيات البحث، ودراسات سلوك المستخدم", path: "أبحاث المستخدمين" },
          { value: 'D', text: "أدلة الأسلوب (Style Guides)، أمثلة لنبرة الصوت، ومقالات استراتيجية المحتوى", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 13,
        question: "بتقيس نجاحك في الشغل إزاي؟",
        options: [
          { value: 'C', text: "تحقيق أهداف البيزنس، تسليم الميزات في وقتها، ومقاييس الاستخدام", path: "إدارة المنتجات" },
          { value: 'B', text: "خلق تجارب ممتعة، فيدباك إيجابي من المستخدمين، وجودة التصميم", path: "تصميم المنتجات" },
          { value: 'A', text: "اكتشاف رؤى قيمة، التأثير على القرارات، وتحسين فهم المستخدم", path: "أبحاث المستخدمين" },
          { value: 'D', text: "وضوح التواصل، تقليل تذاكر الدعم الفني، وزيادة الفهم عند المستخدم", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 14,
        question: "تفضل تقضي وقتك في إيه؟",
        options: [
          { value: 'C', text: "تحليل فرص السوق وبناء خرائط طريق للمنتج", path: "إدارة المنتجات" },
          { value: 'B', text: "تصميم الواجهات وتحسين الحلول البصرية", path: "تصميم المنتجات" },
          { value: 'A', text: "الكلام مع المستخدمين وتجميع نتائج البحث", path: "أبحاث المستخدمين" },
          { value: 'D', text: "تنقيح النصوص، خلق تدفقات للمحتوى، وضمان التناسق", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 15,
        question: "النتيجة المثالية للمشروع بالنسبة لك هي:",
        options: [
          { value: 'C', text: "إطلاق منتج ناجح يحقق أهداف البيزنس", path: "إدارة المنتجات" },
          { value: 'B', text: "منتج جميل وبديهي المستخدمين يحبوا يتفاعلوا معاه", path: "تصميم المنتجات" },
          { value: 'A', text: "فهم عميق للمستخدم يقود لقرارات منتج أفضل", path: "أبحاث المستخدمين" },
          { value: 'D', text: "تجربة سلسة المستخدم يعرف فيها يعمل إيه بالظبط من غير حيرة", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 16,
        question: "لما تتعلم حاجة جديدة، بتفضل:",
        options: [
          { value: 'C', text: "فهم أطر العمل (Frameworks)، قراءة دراسات حالة، والتعلم من أمثلة واقعية", path: "إدارة المنتجات" },
          { value: 'B', text: "التطبيق العملي، دروس مرئية، وبناء مشاريع حقيقية", path: "تصميم المنتجات" },
          { value: 'A', text: "فهم النظرية، قراءة أوراق بحثية، وتحليل المنهجيات", path: "أبحاث المستخدمين" },
          { value: 'D', text: "قراءة الإرشادات، فهم مبادئ التواصل الواضح، وتحليل النصوص", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 17,
        question: "إيه أكتر حاجة بتحمسك في الشغل في التكنولوجيا؟",
        options: [
          { value: 'C', text: "بناء منتجات تحل مشاكل حقيقية وتخلق قيمة للبيزنس", path: "إدارة المنتجات" },
          { value: 'B', text: "صناعة تجارب الناس تستمتع باستخدامها كل يوم", path: "تصميم المنتجات" },
          { value: 'A', text: "فهم الناس وجعل المنتجات متمحورة أكتر حول المستخدم", path: "أبحاث المستخدمين" },
          { value: 'D', text: "أنسنة التكنولوجيا وجعلها سهلة الوصول من خلال اللغة", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 18,
        question: "مدى راحتك مع الغموض (Ambiguity)؟",
        options: [
          { value: 'C', text: "مرتاح جداً — بستمتع باتخاذ قرارات بمعلومات غير كاملة", path: "إدارة المنتجات" },
          { value: 'B', text: "مرتاح نوعاً ما — بحب استكشاف الخيارات من خلال محاولات التصميم", path: "تصميم المنتجات" },
          { value: 'A', text: "بفضل تقليل الغموض من خلال البحث والتحقق مع المستخدمين", path: "أبحاث المستخدمين" },
          { value: 'D', text: "بحب أحول الغموض لهيكل واضح من خلال التعريفات واللغة", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 19,
        question: "إيه الدور اللي بتاخده تلقائياً في مشاريع المجموعات؟",
        options: [
          { value: 'C', text: "المنظم اللي بينسق، بيحدد الاتجاه، وبيخلي الكل على نفس الخط", path: "إدارة المنتجات" },
          { value: 'B', text: "المبدع اللي بيحول الأفكار لواقع بصري وبيصمم الحلول", path: "تصميم المنتجات" },
          { value: 'A', text: "المحقق اللي بيسأل أسئلة، بيجمع معلومات، وبيقدم رؤى", path: "أبحاث المستخدمين" },
          { value: 'D', text: "المحرر اللي بيوضح الأفكار، بيضمن التناسق، وبينقح المخرج النهائي", path: "كتابة تجربة المستخدم" },
        ]
      },
      {
        id: 20,
        question: "شايف نفسك فين بعد 2-3 سنين؟",
        options: [
          { value: 'C', text: "بقود استراتيجية منتج، بدير إطلاق منتجات، وبحقق نمو للبيزنس", path: "إدارة المنتجات" },
          { value: 'B', text: "محترف أدوات التصميم، باني بورتفوليو قوي، وبعمل UX استثنائي", path: "تصميم المنتجات" },
          { value: 'A', text: "بجري دراسات بحثية معقدة، وبأثر على اتجاه المنتج بالـ Insights", path: "أبحاث المستخدمين" },
          { value: 'D', text: "بقود استراتيجية المحتوى، بحدد صوت البراند، وبدافع عن الوضوح", path: "كتابة تجربة المستخدم" },
        ]
      },
    ],
    results: {
      A: {
        title: "أنت مناسب جداً لمجال أبحاث المستخدمين (User Research)",
        subtitle: "أنت بتستمتع بفهم الناس بعمق وتحويل الرؤى لقرارات.",
        description: "بناءً على إجاباتك، عندك ميل قوي لفهم سلوك المستخدم، تجميع الرؤى، وتقديم توصيات مبنية على البيانات. أنت بطبيعتك فضولي، متعاطف، وتحليلي — دي كلها صفات أساسية للباحث الناجح.",
        path: '/user-research',
        color: 'green',
        icon: Search,
        strengths: [
          "فضول قوي تجاه السلوك البشري والدوافع",
          "عقلية تحليلية بتركيز على القرارات المبنية على أدلة",
          "تعاطف طبيعي ومهارات استماع",
          "اهتمام بالمنهجيات وطرق البحث المنظمة"
        ]
      },
      B: {
        title: "أنت مناسب جداً لمجال تصميم المنتجات (Product Design)",
        subtitle: "أنت بتفكر بصرياً وبتستمتع بتصميم تجارب رقمية بديهية.",
        description: "بناءً على إجاباتك، عندك تفكير بصري قوي، إبداع، وشغف لخلق تجارب متمحورة حول المستخدم. أنت بطبيعتك بتفكر في قابلية الاستخدام، الجماليات، وإزاي الناس بتستخدم المنتجات.",
        path: '/product-design',
        color: 'purple',
        icon: Palette,
        strengths: [
          "قدرات بصرية وإبداعية في حل المشاكل",
          "اهتمام قوي بالتفاصيل والجماليات",
          "تفكير تصميمي متمحور حول المستخدم",
          "اهتمام بالصناعة اليدوية والتكرار (Iteration)"
        ]
      },
      C: {
        title: "أنت مناسب جداً لمجال إدارة المنتجات (Product Management)",
        subtitle: "أنت بتستمتع بالملكية، الاستراتيجية، وحل المشاكل المعقدة.",
        description: "بناءً على إجاباتك، عندك تفكير استراتيجي قوي، صفات قيادية، وقدرة على الموازنة بين أطراف مختلفة. أنت بطبيعتك بتفكر في أهداف البيزنس، الأولويات، وإزاي تقود نجاح المنتج.",
        path: '/product-management',
        color: 'blue',
        icon: Lightbulb,
        strengths: [
          "تفكير استراتيجي ونظرة شمولية",
          "تواصل قوي وإدارة أصحاب المصلحة",
          "راحة في اتخاذ القرارات في ظل عدم اليقين",
          "اهتمام بالبيزنس، التكنولوجيا، واحتياجات المستخدم"
        ]
      },
      D: {
        title: "أنت مناسب جداً لمجال كتابة تجربة المستخدم (UX Writing)",
        subtitle: "أنت بتستمتع بتبسيط التعقيد والتصميم بالكلمات.",
        description: "بناءً على إجاباتك، عندك تقدير قوي للوضوح، الهيكلة، وقوة الكلمات. أنت فاهم إن اللغة جزء أساسي من تجربة المستخدم وبتستمتع بإيجاد الطريقة المثالية لشرح المفاهيم المعقدة.",
        path: '/ux-writing',
        color: 'rose',
        icon: PenTool,
        strengths: [
          "القدرة على تبسيط المفاهيم المعقدة بلغة واضحة",
          "تعاطف قوي بيظهر من خلال النبرة والصوت",
          "تفكير هيكلي ومهارات هندسة المعلومات",
          "شغف بالتناسق والتواصل الواضح"
        ]
      }
    }
  }
};
