import { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';

interface NavigationProps { currentPath: string; onNavigate: (path: string) => void; }

export function Navigation({ currentPath, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPathsDropdownOpen, setIsPathsDropdownOpen] = useState(false);
  const [isMobilePathsOpen, setIsMobilePathsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLButtonElement>(null);
  const { t, language, setLanguage, dir } = useLanguage();
  const normalizedPath = currentPath.replace(/^\/(en|ar)(?=\/|$)/, '') || '/';

  const pathLinks = [
    { path: '/product-management', label: t('nav.productManagement') },
    { path: '/product-design', label: t('nav.productDesign') },
    { path: '/user-research', label: t('nav.userResearch') },
    { path: '/ux-writing', label: t('nav.uxWriting') },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsMenuOpen(false); setIsPathsDropdownOpen(false); }, [currentPath]);

  useEffect(() => {
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    if (main instanceof HTMLElement) main.inert = isMenuOpen;
    if (footer instanceof HTMLElement) footer.inert = isMenuOpen;
    if (isMenuOpen) firstMobileLinkRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      if (main instanceof HTMLElement) main.inert = false;
      if (footer instanceof HTMLElement) footer.inert = false;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isMenuOpen) { setIsMenuOpen(false); menuButtonRef.current?.focus(); }
        setIsPathsDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isMenuOpen]);

  const navigate = (path: string) => { onNavigate(path); setIsMenuOpen(false); setIsPathsDropdownOpen(false); };
  const navClass = (path: string) => `min-h-11 px-2 text-sm font-bold rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${normalizedPath === path ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'}`;

  return (
    <nav aria-label={language === 'en' ? 'Primary navigation' : 'التنقل الرئيسي'} className={`sticky top-4 mx-4 z-50 h-14 md:h-16 rounded-[2rem] transition-all ${scrolled ? 'ios-glass shadow-sm' : 'bg-transparent'}`} dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <button disabled={isMenuOpen} onClick={() => navigate('/')} className="flex items-center gap-2 group z-50 min-h-11 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" aria-label={t('nav.home')} aria-current={normalizedPath === '/' ? 'page' : undefined}>
            <Logo size={32} /><span className="text-gray-900 font-bold text-xl tracking-tight">StartInProduct</span>
          </button>

          <div className="hidden lg:flex items-center gap-4">
            <button onClick={() => navigate('/')} className={navClass('/')} aria-current={normalizedPath === '/' ? 'page' : undefined}>{t('nav.home')}</button>
            <button onClick={() => navigate('/choose-your-path')} className={navClass('/choose-your-path')} aria-current={normalizedPath === '/choose-your-path' ? 'page' : undefined}>{t('nav.whichPath')}</button>
            <div className="relative">
              <button onClick={() => setIsPathsDropdownOpen(open => !open)} className={`${navClass('')} flex items-center gap-1`} aria-expanded={isPathsDropdownOpen} aria-controls="desktop-path-menu">
                {t('nav.explorePaths')}<ChevronDown size={16} aria-hidden="true" />
              </button>
              {isPathsDropdownOpen && <div id="desktop-path-menu" className={`absolute top-full ${dir === 'rtl' ? 'right-0' : 'left-0'} pt-2 w-64`}>
                <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-200">
                  {pathLinks.map(link => <button key={link.path} onClick={() => navigate(link.path)} className="block w-full text-start px-4 py-3 min-h-11 text-sm rounded-xl text-gray-700 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600" aria-current={normalizedPath === link.path ? 'page' : undefined}>{link.label}</button>)}
                </div>
              </div>}
            </div>
            <button onClick={() => navigate('/templates')} className={navClass('/templates')} aria-current={normalizedPath === '/templates' ? 'page' : undefined}>{language === 'en' ? 'Resources' : 'المصادر'}</button>
            <button onClick={() => navigate('/about')} className={navClass('/about')} aria-current={normalizedPath === '/about' ? 'page' : undefined}>{t('nav.about')}</button>
            <button onClick={() => navigate('/contact')} className={navClass('/contact')} aria-current={normalizedPath === '/contact' ? 'page' : undefined}>{t('nav.contact')}</button>
          </div>

          <div className="flex items-center gap-2 z-50">
            <button disabled={isMenuOpen} onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} className="min-w-11 min-h-11 px-2 text-gray-700 hover:text-gray-900 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600" aria-label={language === 'en' ? 'عرض الموقع بالعربية' : 'View site in English'}>
              <Globe size={18} className="hidden lg:inline me-1" aria-hidden="true" />{language === 'en' ? 'عربي' : 'EN'}
            </button>
            <button ref={menuButtonRef} onClick={() => setIsMenuOpen(open => !open)} className="lg:hidden w-11 h-11 flex items-center justify-center text-gray-700 rounded-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600" aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? (language === 'en' ? 'Close navigation menu' : 'إغلاق القائمة') : (language === 'en' ? 'Open navigation menu' : 'فتح القائمة')}>
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {isMenuOpen && <div id="mobile-navigation" role="dialog" aria-modal="true" aria-label={language === 'en' ? 'Navigation menu' : 'قائمة التنقل'} className="lg:hidden fixed top-24 left-4 right-4 bottom-4 bg-white rounded-3xl z-40 overflow-y-auto shadow-2xl border border-gray-200">
          <div className="p-4 space-y-1">
            <button ref={firstMobileLinkRef} onClick={() => navigate('/')} className="mobile-nav-link" aria-current={normalizedPath === '/' ? 'page' : undefined}>{t('nav.home')}</button>
            <button onClick={() => navigate('/choose-your-path')} className="mobile-nav-link" aria-current={normalizedPath === '/choose-your-path' ? 'page' : undefined}>{t('nav.whichPath')}</button>
            <button onClick={() => setIsMobilePathsOpen(open => !open)} className="mobile-nav-link flex items-center justify-between" aria-expanded={isMobilePathsOpen} aria-controls="mobile-paths">{t('nav.explorePaths')}<ChevronDown size={20} aria-hidden="true" /></button>
            {isMobilePathsOpen && <div id="mobile-paths" className="ps-4 space-y-1">{pathLinks.map(link => <button key={link.path} onClick={() => navigate(link.path)} className="mobile-nav-link text-sm" aria-current={normalizedPath === link.path ? 'page' : undefined}>{link.label}</button>)}</div>}
            <button onClick={() => navigate('/templates')} className="mobile-nav-link" aria-current={normalizedPath === '/templates' ? 'page' : undefined}>{language === 'en' ? 'Templates & Resources' : 'القوالب والمصادر'}</button>
            <button onClick={() => navigate('/mentors')} className="mobile-nav-link" aria-current={normalizedPath === '/mentors' ? 'page' : undefined}>{language === 'en' ? 'Mentorship' : 'الإرشاد المهني'}</button>
            <button onClick={() => navigate('/about')} className="mobile-nav-link" aria-current={normalizedPath === '/about' ? 'page' : undefined}>{t('nav.about')}</button>
            <button onClick={() => navigate('/contact')} className="mobile-nav-link" aria-current={normalizedPath === '/contact' ? 'page' : undefined}>{t('nav.contact')}</button>
          </div>
        </div>}
      </div>
    </nav>
  );
}
