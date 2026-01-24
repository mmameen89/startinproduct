import { Button } from '../components/Button';
import { ArrowLeft, FileText, Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Templates({ onNavigate }: { onNavigate: (path: string) => void }) {
  const { dir, language } = useLanguage();

  const content = {
    en: {
      back: "Back to Home",
      title: "Templates & Resources",
      description: "A curated collection of essential templates and frameworks to help you excel in your product career.",
      getTemplate: "Get Template",
      items: [
        {
          title: "Product Requirements Document (PRD)",
          description: "A comprehensive template for defining product requirements, including user stories, acceptance criteria, and technical specs.",
          link: "https://www.notion.so/templates/product-requirements-document-prd"
        },
        {
          title: "User Persona Template",
          description: "Create detailed user personas to better understand your target audience, their needs, and pain points.",
          link: "https://www.figma.com/community/file/1083049132649692447"
        },
        {
          title: "Product Roadmap",
          description: "Visualize your product strategy and timeline with this customizable roadmap template.",
          link: "https://miro.com/templates/product-roadmap/"
        },
        {
          title: "User Interview Script",
          description: "A structured guide for conducting effective user interviews to gather meaningful qualitative data.",
          link: "https://dscout.com/people-nerds/user-interview-guide"
        },
        {
          title: "Competitor Analysis Framework",
          description: "Analyze your competition's strengths and weaknesses to identify market opportunities.",
          link: "https://www.mural.co/templates/competitive-analysis"
        },
        {
          title: "Usability Testing Plan",
          description: "Plan and execute usability tests to validate your design decisions and improve user experience.",
          link: "https://maze.co/guides/usability-testing/plan/"
        }
      ]
    },
    ar: {
      back: "الرجوع للرئيسية",
      title: "القوالب والمصادر",
      description: "مجموعة مختارة من القوالب والأدوات الأساسية لمساعدتك على التفوق في مجالك.",
      getTemplate: "تحميل القالب",
      items: [
        {
          title: "وثيقة متطلبات المنتج (PRD)",
          description: "قالب شامل لتحديد متطلبات المنتج، بما في ذلك قصص المستخدمين، معايير القبول، والمواصفات الفنية.",
          link: "https://www.notion.so/templates/product-requirements-document-prd"
        },
        {
          title: "قالب شخصية المستخدم (Persona)",
          description: "أنشئ شخصيات مستخدمين مفصلة لفهم جمهورك المستهدف واحتياجاتهم ونقاط الألم بشكل أفضل.",
          link: "https://www.figma.com/community/file/1083049132649692447"
        },
        {
          title: "خارطة طريق المنتج (Roadmap)",
          description: "تخيل استراتيجية منتجك والجدول الزمني باستخدام قالب خارطة الطريق القابل للتخصيص هذا.",
          link: "https://miro.com/templates/product-roadmap/"
        },
        {
          title: "سيناريو مقابلات المستخدمين",
          description: "دليل منظم لإجراء مقابلات مستخدمين فعالة لجمع بيانات نوعية ذات معنى.",
          link: "https://dscout.com/people-nerds/user-interview-guide"
        },
        {
          title: "إطار تحليل المنافسين",
          description: "حلل نقاط القوة والضعف لدى منافسيك لتحديد فرص السوق.",
          link: "https://www.mural.co/templates/competitive-analysis"
        },
        {
          title: "خطة اختبار قابلية الاستخدام",
          description: "خطط ونفذ اختبارات قابلية الاستخدام للتحقق من قرارات التصميم وتحسين تجربة المستخدم.",
          link: "https://maze.co/guides/usability-testing/plan/"
        }
      ]
    }
  };

  const currentContent = content[language as 'en' | 'ar'] || content.en;

  return (
    <div className="min-h-screen pb-20" dir={dir}>
      {/* Header */}
      <div className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => onNavigate('/')}
              className={`pl-0 hover:bg-white/40 text-gray-500 hover:text-gray-900 transition-all ${dir === 'rtl' ? 'pr-0' : ''}`}
            >
              <ArrowLeft size={20} className={`inline ${dir === 'rtl' ? 'ml-2 rotate-180' : 'mr-2'}`} />
              {currentContent.back}
            </Button>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">{currentContent.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            {currentContent.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.items.map((template, index) => (
            <div
              key={index}
              className="
                group relative ios-card rounded-[2rem] p-10
                transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/80
              "
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-50/50 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-100/50">
                  <FileText size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {template.title}
                </h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                  {template.description}
                </p>
                <a
                  href={template.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100/50 hover:bg-blue-100/50 transition-all"
                >
                  {currentContent.getTemplate} <ExternalLink size={14} className={`inline ${dir === 'rtl' ? 'mr-2' : 'ml-2'}`} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
