import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './Button';

interface NavigationProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Navigation({ currentPath, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPathsDropdownOpen, setIsPathsDropdownOpen] = useState(false);
  const [isMobilePathsOpen, setIsMobilePathsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage, dir } = useLanguage();

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const pathLinks = [
    { path: '/product-management', label: t('nav.productManagement') },
    { path: '/product-design', label: t('nav.productDesign') },
    { path: '/user-research', label: t('nav.userResearch') },
    { path: '/ux-writing', label: t('nav.uxWriting') },
  ];

  // Normalize current path for active state checking by removing lang prefix
  const normalizedPath = currentPath.replace(/^\/(en|ar)/, '') || '/';

  const isPathActive = pathLinks.some(link => normalizedPath === link.path);

  const navLinkClass = (path: string) => `
    text-sm font-medium transition-all duration-200 
    ${normalizedPath === path
      ? 'text-blue-600'
      : 'text-gray-600 hover:text-blue-600'
    }
  `;

  return (
    <nav
      className={`sticky top-4 mx-4 z-50 transition-all duration-300 h-14 md:h-16 rounded-[2rem] ${scrolled
        ? 'ios-glass'
        : 'bg-transparent'
        }`}
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo Section */}
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-2 group z-50"
            aria-label={t('nav.home')}
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              <Logo size={32} />
            </div>
            <span className="text-gray-900 font-bold text-xl tracking-tight group-hover:text-blue-600 transition-colors">
              StartInProduct
            </span>
          </button>

          {/* Desktop Center Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => onNavigate('/')}
              className={navLinkClass('/')}
            >
              {t('nav.home')}
            </button>

            <button
              onClick={() => onNavigate('/choose-your-path')}
              className={navLinkClass('/choose-your-path')}
            >
              {t('nav.whichPath')}
            </button>

            {/* Explore Paths Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsPathsDropdownOpen(true)}
              onMouseLeave={() => setIsPathsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${isPathActive ? 'text-blue-600' : 'text-gray-600 group-hover:text-blue-600'
                  }`}
                aria-expanded={isPathsDropdownOpen}
                aria-haspopup="true"
              >
                <span>{t('nav.explorePaths')}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isPathsDropdownOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full ${dir === 'rtl' ? 'right-0' : 'left-0'} pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left`}
              >
                <div className="glass-card bg-white/80 dark:bg-[#1c1c1e]/80 p-2 overflow-hidden rounded-2xl shadow-xl">
                  {pathLinks.map((link) => (
                    <button
                      key={link.path}
                      onClick={() => {
                        onNavigate(link.path);
                        setIsPathsDropdownOpen(false);
                      }}
                      className={`block w-full text-left rtl:text-right px-4 py-3 text-sm rounded-xl transition-colors ${currentPath === link.path
                        ? 'bg-blue-500/10 text-blue-600 font-medium'
                        : 'text-gray-600 hover:bg-black/5 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white'
                        }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('/about')}
              className={navLinkClass('/about')}
            >
              {t('nav.about')}
            </button>

            <button
              onClick={() => onNavigate('/contact')}
              className={navLinkClass('/contact')}
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2"
              aria-label="Toggle Language"
            >
              <Globe size={20} />
              <span className="text-sm font-medium">{language === 'en' ? 'العربية' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4 z-50">
            <button
              onClick={toggleLanguage}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm"
            >
              {language === 'en' ? 'عربي' : 'EN'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`lg:hidden fixed top-24 left-4 right-4 bottom-4 glass-panel rounded-3xl z-40 overflow-y-auto transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
            }`}
        >
          <div className="p-4 space-y-1">
            <button
              onClick={() => {
                onNavigate('/');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left rtl:text-right px-4 py-4 text-base font-medium rounded-xl ${currentPath === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              {t('nav.home')}
            </button>

            <button
              onClick={() => {
                onNavigate('/choose-your-path');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left rtl:text-right px-4 py-4 text-base font-medium rounded-xl ${currentPath === '/choose-your-path' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              {t('nav.whichPath')}
            </button>

            {/* Mobile Explore Paths Dropdown */}
            <div className="px-4 py-2">
              <button
                onClick={() => setIsMobilePathsOpen(!isMobilePathsOpen)}
                className={`flex items-center justify-between w-full text-left rtl:text-right py-2 text-base font-medium ${isPathActive ? 'text-blue-600' : 'text-gray-600'
                  }`}
              >
                <span>{t('nav.explorePaths')}</span>
                <ChevronDown size={20} className={`transition-transform duration-200 ${isMobilePathsOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ${isMobilePathsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                {pathLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => {
                      onNavigate(link.path);
                      setIsMenuOpen(false);
                      setIsMobilePathsOpen(false);
                    }}
                    className={`block w-full text-left rtl:text-right pl-4 rtl:pl-0 rtl:pr-4 pr-0 py-3 text-sm rounded-lg ${currentPath === link.path
                      ? 'text-blue-600 bg-blue-50 font-medium'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                onNavigate('/about');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left rtl:text-right px-4 py-4 text-base font-medium rounded-xl ${currentPath === '/about' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              {t('nav.about')}
            </button>

            <button
              onClick={() => {
                onNavigate('/contact');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left rtl:text-right px-4 py-4 text-base font-medium rounded-xl ${currentPath === '/contact' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              {t('nav.contact')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
