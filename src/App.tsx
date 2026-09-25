import { useState, useEffect, lazy, Suspense } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Toaster } from 'sonner';

const ProductManagementPath = lazy(() => import('./pages/ProductManagementPath').then(m => ({ default: m.ProductManagementPath })));
const ProductDesignPath = lazy(() => import('./pages/ProductDesignPath').then(m => ({ default: m.ProductDesignPath })));
const UserResearchPath = lazy(() => import('./pages/UserResearchPath').then(m => ({ default: m.UserResearchPath })));
const UXWritingPath = lazy(() => import('./pages/UXWritingPath').then(m => ({ default: m.UXWritingPath })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const ChooseYourPath = lazy(() => import('./pages/ChooseYourPath').then(m => ({ default: m.ChooseYourPath })));
const Quiz = lazy(() => import('./pages/Quiz').then(m => ({ default: m.Quiz })));
const Mentors = lazy(() => import('./pages/Mentors').then(m => ({ default: m.Mentors })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));
const Privacy = lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const Templates = lazy(() => import('./pages/Templates').then(m => ({ default: m.Templates })));

const pageMeta: Record<string, { en: [string, string]; ar: [string, string] }> = {
  '/': {
    en: ['StartInProduct | Product Career Learning Paths', 'Structured learning paths, practical resources, and mentorship for Product Management, Product Design, User Research, and UX Writing.'],
    ar: ['StartInProduct | مسارات تعلم وظائف المنتجات', 'مسارات تعلم منظمة ومصادر عملية وإرشاد مهني لإدارة المنتجات وتصميم المنتجات وأبحاث المستخدم وكتابة تجربة المستخدم.'],
  },
  '/product-management': { en: ['Product Management Learning Path | StartInProduct', 'Follow a structured Product Management roadmap from fundamentals to a job-ready portfolio.'], ar: ['مسار تعلم إدارة المنتجات | StartInProduct', 'اتبع خارطة طريق منظمة لتعلم إدارة المنتجات وبناء ملف أعمال جاهز للتوظيف.'] },
  '/product-design': { en: ['Product Design Learning Path | StartInProduct', 'Learn UX, UI, Figma, and portfolio skills through a structured Product Design roadmap.'], ar: ['مسار تعلم تصميم المنتجات | StartInProduct', 'تعلم تجربة المستخدم والواجهات وFigma وبناء ملف أعمال عبر مسار منظم.'] },
  '/user-research': { en: ['User Research Learning Path | StartInProduct', 'Learn research planning, interviews, analysis, and insight communication through a practical roadmap.'], ar: ['مسار تعلم أبحاث المستخدم | StartInProduct', 'تعلم تخطيط الأبحاث والمقابلات والتحليل وعرض النتائج عبر مسار عملي.'] },
  '/ux-writing': { en: ['UX Writing Learning Path | StartInProduct', 'Build UX writing and content design skills with practical exercises and portfolio guidance.'], ar: ['مسار تعلم كتابة تجربة المستخدم | StartInProduct', 'طوّر مهارات كتابة تجربة المستخدم وتصميم المحتوى مع تطبيقات عملية وإرشاد للملف المهني.'] },
  '/choose-your-path': { en: ['Compare Product Career Paths | StartInProduct', 'Compare Product Management, Design, Research, and UX Writing to choose the path that fits you.'], ar: ['قارن مسارات وظائف المنتجات | StartInProduct', 'قارن بين إدارة المنتجات والتصميم والأبحاث وكتابة تجربة المستخدم واختر المسار الأنسب لك.'] },
  '/quiz': { en: ['Product Career Assessment | StartInProduct', 'Take a free assessment to discover which product career path best matches your strengths.'], ar: ['اختبار تحديد المسار المهني | StartInProduct', 'أجب عن اختبار مجاني لمعرفة مسار المنتجات الأقرب لنقاط قوتك.'] },
  '/mentors': { en: ['Product Career Mentorship | StartInProduct', 'Book career guidance with a verified product mentor.'], ar: ['إرشاد مهني لوظائف المنتجات | StartInProduct', 'احجز جلسة إرشاد مهني مع خبير منتجات موثّق.'] },
  '/templates': { en: ['Product Templates and Resources | StartInProduct', 'Open curated templates and practical resources for product careers.'], ar: ['قوالب ومصادر المنتجات | StartInProduct', 'استكشف قوالب ومصادر عملية مختارة لمسارك المهني في المنتجات.'] },
  '/about': { en: ['About | StartInProduct', 'Learn why StartInProduct helps early-career professionals build product skills with clarity.'], ar: ['عن StartInProduct', 'تعرف على هدف StartInProduct في مساعدة المبتدئين على بناء مهارات المنتجات بوضوح.'] },
  '/contact': { en: ['Contact | StartInProduct', 'Contact StartInProduct with questions about learning paths or mentorship.'], ar: ['تواصل معنا | StartInProduct', 'تواصل مع StartInProduct لأسئلتك عن مسارات التعلم أو الإرشاد المهني.'] },
  '/privacy': { en: ['Privacy Policy | StartInProduct', 'Read how StartInProduct handles website and contact information.'], ar: ['سياسة الخصوصية | StartInProduct', 'اعرف كيف يتعامل StartInProduct مع بيانات الموقع والتواصل.'] },
  '/terms': { en: ['Terms of Use | StartInProduct', 'Read the terms that apply when using StartInProduct resources.'], ar: ['شروط الاستخدام | StartInProduct', 'اقرأ الشروط المطبقة عند استخدام مصادر StartInProduct.'] },
};

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let element = document.head.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function App() {
  return <LanguageProvider><Toaster position="top-center" /><AppContent /></LanguageProvider>;
}

function AppContent() {
  const { language } = useLanguage();
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const normalizedPath = currentPath.split('?')[0].replace(/^\/(en|ar)(?=\/|$)/, '') || '/';

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const fallback = language === 'ar'
      ? ['الصفحة غير موجودة | StartInProduct', 'تعذر العثور على الصفحة المطلوبة.']
      : ['Page Not Found | StartInProduct', 'The requested page could not be found.'];
    const [title, description] = pageMeta[normalizedPath]?.[language] ?? fallback;
    const canonical = `${window.location.origin}/${language}${normalizedPath === '/' ? '' : normalizedPath}`;
    document.title = title;
    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', canonical, true);
    setMeta('twitter:card', 'summary_large_image');
    let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = canonical;
    (['en', 'ar'] as const).forEach(lang => {
      let alt = document.head.querySelector(`link[rel="alternate"][hreflang="${lang}"]`) as HTMLLinkElement | null;
      if (!alt) { alt = document.createElement('link'); alt.rel = 'alternate'; alt.hreflang = lang; document.head.appendChild(alt); }
      alt.href = `${window.location.origin}/${lang}${normalizedPath === '/' ? '' : normalizedPath}`;
    });
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }, [language, normalizedPath]);

  const handleNavigate = (path: string) => {
    const clean = path.replace(/^\/(en|ar)(?=\/|$)/, '') || '/';
    const localized = `/${language}${clean === '/' ? '' : clean}`;
    window.history.pushState({}, '', localized);
    setCurrentPath(localized);
  };

  const renderPage = () => {
    switch (normalizedPath) {
      case '/': return <Home onNavigate={handleNavigate} />;
      case '/product-management': return <ProductManagementPath onNavigate={handleNavigate} />;
      case '/product-design': return <ProductDesignPath onNavigate={handleNavigate} />;
      case '/user-research': return <UserResearchPath onNavigate={handleNavigate} />;
      case '/ux-writing': return <UXWritingPath onNavigate={handleNavigate} />;
      case '/choose-your-path': return <ChooseYourPath onNavigate={handleNavigate} />;
      case '/quiz': return <Quiz onNavigate={handleNavigate} />;
      case '/mentors': return <Mentors onNavigate={handleNavigate} />;
      case '/templates': return <Templates onNavigate={handleNavigate} />;
      case '/about': return <About onNavigate={handleNavigate} />;
      case '/contact': return <Contact onNavigate={handleNavigate} />;
      case '/privacy': return <Privacy />;
      case '/terms': return <Terms />;
      default: return <NotFound onNavigate={handleNavigate} />;
    }
  };

  return <div className="min-h-screen"><a href="#main-content" className="skip-link">{language === 'ar' ? 'انتقل إلى المحتوى' : 'Skip to content'}</a><Navigation currentPath={currentPath} onNavigate={handleNavigate} /><main id="main-content"><Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center" role="status">Loading…</div>}>{renderPage()}</Suspense></main><Footer onNavigate={handleNavigate} /></div>;
}
