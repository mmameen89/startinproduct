
import { Lightbulb, Palette, Search, PenTool } from 'lucide-react';

export const choosePathData = {
  en: {
    comparison: [
      {
        aspect: "Primary Focus",
        pm: "Strategy & Delivery",
        pd: "Interface & Experience",
        ur: "User Insights & Data",
        uw: "Content & Communication"
      },
      {
        aspect: "Key Question",
        pm: "\"What should we build?\"",
        pd: "\"How should it look & work?\"",
        ur: "\"Why do users need this?\"",
        uw: "\"How do we say this?\""
      },
      {
        aspect: "Daily Activities",
        pm: "Planning, prioritizing, stakeholder meetings",
        pd: "Wireframing, prototyping, visual design",
        ur: "Interviews, surveys, data analysis",
        uw: "Writing copy, content audits, style guides"
      },
      {
        aspect: "Best Suited For",
        pm: "Strategic thinkers, problem solvers",
        pd: "Creative minds, visual thinkers",
        ur: "Curious minds, data enthusiasts",
        uw: "Writers, communicators, empathizers"
      },
      {
        aspect: "Tools You'll Use",
        pm: "Jira, Analytics, Excel",
        pd: "Figma, Adobe XD, Sketch",
        ur: "Survey tools, Analytics, Note-taking",
        uw: "Figma, Docs, CMS, Style Guides"
      }
    ],
    deepDive: [
      {
        id: 'pm',
        title: "Product Management",
        roleDescription: "The strategic leader who defines what to build and why",
        icon: Lightbulb,
        color: "blue",
        path: "/product-management",
        whatYouWillDo: [
          "Define product vision and strategy",
          "Prioritize features based on user needs and business goals",
          "Coordinate between engineering, design, marketing, and sales teams",
          "Analyze market trends and competitor products",
          "Make data-driven decisions about product direction",
          "Manage product roadmaps and release planning"
        ],
        youWillLoveThisIf: [
          "You enjoy solving complex problems strategically",
          "You like working with multiple teams and stakeholders",
          "You are comfortable making decisions with incomplete information",
          "You are interested in both business and technology",
          "You enjoy analyzing data and market trends"
        ]
      },
      {
        id: 'pd',
        title: "Product Design (UI/UX)",
        roleDescription: "The creative professional who designs beautiful and functional experiences",
        icon: Palette,
        color: "purple",
        path: "/product-design",
        whatYouWillDo: [
          "Create wireframes, mockups, and interactive prototypes",
          "Design user interfaces that are both beautiful and functional",
          "Conduct usability testing to validate design decisions",
          "Build and maintain design systems for consistency",
          "Collaborate with developers to implement designs",
          "Iterate on designs based on user feedback"
        ],
        youWillLoveThisIf: [
          "You have a strong visual sense and attention to detail",
          "You enjoy creating things people can see and interact with",
          "You are passionate about user experience and usability",
          "You like combining creativity with problem-solving",
          "You are comfortable learning design tools like Figma"
        ]
      },
      {
        id: 'ur',
        title: "User Research",
        roleDescription: "The investigator who uncovers user needs and validates assumptions",
        icon: Search,
        color: "green",
        path: "/user-research",
        whatYouWillDo: [
          "Conduct user interviews and surveys to gather insights",
          "Analyze qualitative and quantitative data",
          "Create user personas and journey maps",
          "Plan and execute usability testing sessions",
          "Present research findings to stakeholders",
          "Uncover the \"why\" behind user behavior"
        ],
        youWillLoveThisIf: [
          "You are naturally curious about why people do what they do",
          "You enjoy analyzing patterns and drawing insights from data",
          "You are a good listener and communicator",
          "You like conducting interviews and talking to users",
          "You want to be the voice of the user in product decisions"
        ]
      },
      {
        id: 'uw',
        title: "UX Writing",
        roleDescription: "The content strategist who designs with words",
        icon: PenTool,
        color: "rose",
        path: "/ux-writing",
        whatYouWillDo: [
          "Write clear, concise copy for user interfaces",
          "Create voice and tone guidelines for products",
          "Design content hierarchies and information flows",
          "Simplify complex technical concepts for users",
          "Collaborate with designers on layouts and flows",
          "Conduct content audits and testing"
        ],
        youWillLoveThisIf: [
          "You love finding the perfect word to explain something",
          "You are passionate about clarity and simplicity",
          "You enjoy the intersection of writing and design",
          "You have a knack for organizing information logicially",
          "You are detail-oriented about grammar and style"
        ]
      }
    ],
    decision: [
      {
        title: "Choose Product Management if:",
        color: "blue",
        icon: Lightbulb, // Mapping logical icon, though UI uses Users for PM decision card
        points: [
          "You are a natural leader and coordinator",
          "You love strategy and big-picture thinking",
          "You are comfortable with ambiguity",
          "You want to shape product direction"
        ]
      },
      {
        title: "Choose Product Design if:",
        color: "purple",
        icon: Palette,
        points: [
          "You are visually oriented and creative",
          "You love making things look good",
          "You enjoy hands-on creation work",
          "You care deeply about user experience"
        ]
      },
      {
        title: "Choose User Research if:",
        color: "green",
        icon: Search,
        points: [
          "You are naturally curious and analytical",
          "You love understanding human behavior",
          "You enjoy talking to people",
          "You want to base decisions on data"
        ]
      },
      {
        title: "Choose UX Writing if:",
        color: "rose",
        icon: PenTool,
        points: [
          "You love language and communication",
          "You value clarity and simplicity",
          "You think about how to structure information",
          "You enjoy working with design teams"
        ]
      }
    ],
    overlap: [
      "Start as designers and transition to product management",
      "Begin in research and move into design or writing",
      "Combine skills from multiple paths (e.g., design-focused PM or research-heavy designer)",
      "Switch between roles as they discover their strengths and interests"
    ]
  },
  ar: {
    comparison: [
      {
        aspect: "التركيز على إيه",
        pm: "الاستراتيجية والتسليم",
        pd: "الواجهة والتجربة",
        ur: "رؤى المستخدمين والبيانات",
        uw: "المحتوى والتواصل"
      },
      {
        aspect: "أهم سؤال",
        pm: "\"هنعمل إيه؟\"",
        pd: "\"شكلها وطريقة عملها إيه؟\"",
        ur: "\"المستخدمين محتاجين ده ليه؟\"",
        uw: "\"نقول ده إزاي؟\""
      },
      {
        aspect: "هتعمل إيه كل يوم",
        pm: "تخطيط، ترتيب أولويات، اجتماعات",
        pd: "Wireframing، نماذج أولية، تصميم مرئي",
        ur: "مقابلات، استبيانات، تحليل بيانات",
        uw: "كتابة نصوص، تدقيق محتوى، أدلة أسلوب"
      },
      {
        aspect: "أنسب لمين؟",
        pm: "المفكرين الاستراتيجيين، وحلالين المشاكل",
        pd: "المبدعين، والمفكرين بصرياً",
        ur: "الفضوليين، ومحبي البيانات",
        uw: "الكتاب، والمتواصلين، والمتعاطفين"
      },
      {
        aspect: "أدوات هتستخدمها",
        pm: "Jira, Analytics, Excel",
        pd: "Figma, Adobe XD, Sketch",
        ur: "أدوات استبيان، تحليلات، تدوين ملاحظات",
        uw: "Figma, Docs, CMS"
      }
    ],
    deepDive: [
      {
        id: 'pm',
        title: "إدارة المنتجات (Product Management)",
        roleDescription: "القائد الاستراتيجي اللي بيحدد هنبني إيه وليه",
        icon: Lightbulb,
        color: "blue",
        path: "/product-management",
        whatYouWillDo: [
          "تحدد رؤية المنتج واستراتيجيته",
          "ترتب أولويات الميزات بناءً على احتياجات المستخدم وأهداف البيزنس",
          "تنسق بين فرق الهندسة، التصميم، التسويق، والمبيعات",
          "تحلل اتجاهات السوق ومنتجات المنافسين",
          "تاخد قرارات مبنية على البيانات بخصوص اتجاه المنتج",
          "تدير خارطة طريق المنتج (Roadmap) وتخطط الإصدارات"
        ],
        youWillLoveThisIf: [
          "بتحب تحل مشاكل معقدة بشكل استراتيجي",
          "بتحب تشتغل مع فرق وأطراف متعددة",
          "مرتاح وأنت بتاخد قرارات بمعلومات مش كاملة",
          "مهتم بالبيزنس والتكنولوجيا مع بعض",
          "بتحب تحلل البيانات واتجاهات السوق"
        ]
      },
      {
        id: 'pd',
        title: "تصميم المنتجات (Product Design)",
        roleDescription: "المبدع اللي بيصمم تجارب جميلة وعملية",
        icon: Palette,
        color: "purple",
        path: "/product-design",
        whatYouWillDo: [
          "تعمل Wireframes ونماذج أولية تفاعلية (Prototypes)",
          "تصمم واجهات مستخدم جميلة وسهلة الاستخدام",
          "تعمل اختبارات قابلية الاستخدام عشان تتأكد من التصميمات",
          "تبني وتحدث أنظمة التصميم (Design Systems)",
          "تتعاون مع المطورين عشان ينفذوا التصميمات",
          "تحسن التصميمات بناءً على رأي المستخدمين"
        ],
        youWillLoveThisIf: [
          "عندك حس بصري قوي واهتمام بالتفاصيل",
          "بتستمتع بإنك تعمل حاجات الناس تشوفها وتتفاعل معاها",
          "عندك شغف بتجربة المستخدم وسهولة الاستخدام",
          "بتحب تجمع بين الإبداع وحل المشاكل",
          "مستعد تتعلم أدوات تصميم زي Figma"
        ]
      },
      {
        id: 'ur',
        title: "أبحاث المستخدمين (User Research)",
        roleDescription: "المحقق اللي بيكتشف احتياجات المستخدم وبيختبر الافتراضات",
        icon: Search,
        color: "green",
        path: "/user-research",
        whatYouWillDo: [
          "تعمل مقابلات واستبيانات عشان تجمع رؤى المستخدمين",
          "تحلل البيانات النوعية والكمية",
          "تعمل شخصيات المستخدمين (Personas) وخرائط الرحلة",
          "تخطط وتنفذ جلسات اختبار قابلية الاستخدام",
          "تعرض نتائج البحث على أصحاب المصلحة",
          "تكتشف الـ \"ليه\" ورا سلوك المستخدم"
        ],
        youWillLoveThisIf: [
          "بطبيعتك فضولي وعايز تعرف الناس بتتصرف كده ليه",
          "بتستمتع بتحليل الأنماط واستخراج رؤى من البيانات",
          "مستمع شاطر وبتعرف تتواصل",
          "بتحب تعمل مقابلات وتتكلم مع المستخدمين",
          "عايز تكون صوت المستخدم في قرارات المنتج"
        ]
      },
      {
        id: 'uw',
        title: "كتابة تجربة المستخدم (UX Writing)",
        roleDescription: "استراتيجي المحتوى اللي بيصمم بالكلمات",
        icon: PenTool,
        color: "rose",
        path: "/ux-writing",
        whatYouWillDo: [
          "تكتب نصوص واضحة ومختصرة لواجهات المستخدم",
          "تعمل إرشادات نبرة الصوت (Voice & Tone) للمنتجات",
          "تصمم هيكلية المحتوى وتدفق المعلومات",
          "تبسط المفاهيم التقنية المعقدة للمستخدمين",
          "تتعاون مع المصممين في التخطيط وتدفق الشاشات",
          "تعمل تدقيق للمحتوى واختبارات للنصوص"
        ],
        youWillLoveThisIf: [
          "بتحب تلاقي الكلمة المناسبة عشان تشرح حاجة",
          "عندك شغف بالوضوح والبساطة",
          "بتستمتع بتقاطع الكتابة مع التصميم",
          "عندك موهبة في تنظيم المعلومات بشكل منطقي",
          "بتهتم بالتفاصيل في القواعد والأسلوب"
        ]
      }
    ],
    decision: [
      {
        title: "اختار إدارة المنتجات لو:",
        color: "blue",
        icon: Lightbulb,
        points: [
          "أنت قائد ومنسق بطبيعتك",
          "بتحب الاستراتيجية والتفكير في الصورة الكبيرة",
          "مرتاح مع الغموض وعدم الوضوح الكامل",
          "عايز تشكل اتجاه المنتج"
        ]
      },
      {
        title: "اختار تصميم المنتجات لو:",
        color: "purple",
        icon: Palette,
        points: [
          "تفكيرك بصري ومبدع",
          "بتحب تخلي الحاجات شكلها حلو",
          "بتستمتع بالشغل اليدوي والخلق",
          "بتهتم جداً بتجربة المستخدم"
        ]
      },
      {
        title: "اختار أبحاث المستخدمين لو:",
        color: "green",
        icon: Search,
        points: [
          "بطبيعتك فضولي وتحليلي",
          "بتحب تفهم السلوك البشري",
          "بتستمتع بالكلام مع الناس",
          "عايز تبني قراراتك على بيانات"
        ]
      },
      {
        title: "اختار كتابة الـ UX لو:",
        color: "rose",
        icon: PenTool,
        points: [
          "بتحب اللغة والتواصل",
          "بتقدر الوضوح والبساطة",
          "بتفكر في إزاي تهيكل المعلومات",
          "بتستمتع بالشغل مع فرق التصميم"
        ]
      }
    ],
    overlap: [
      "ممكن تبدأ كمصمم وتنقل لإدارة المنتجات",
      "ممكن تبدأ في الأبحاث وتنقل للتصميم أو الكتابة",
      "تجمع مهارات من مسارات مختلفة (مثلاً PM بيفهم في التصميم أو مصمم بيفهم في الأبحاث)",
      "تبدل بين الأدوار لما تكتشف نقاط قوتك واهتماماتك الحقيقية"
    ]
  }
};
