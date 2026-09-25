import { Linkedin, Mail, MessageCircle, Calendar, Github, Twitter, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t, dir } = useLanguage();

  const handleNav = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/20 bg-white/40 backdrop-blur-xl pt-20 pb-12" dir={dir}>
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 rtl:space-x-reverse cursor-pointer group" onClick={handleNav('/')}>
              <div className="p-2 bg-white rounded-xl shadow-lg shadow-blue-500/10 group-hover:shadow-blue-500/20 transition-all duration-300 group-hover:-translate-y-0.5">
                <Logo size={24} />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">StartInProduct</span>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/mmameen89/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/60 hover:bg-white border border-white/40 hover:border-blue-200 rounded-full text-gray-500 hover:text-blue-600 shadow-sm transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:mmameen89@gmail.com"
                className="w-10 h-10 flex items-center justify-center bg-white/60 hover:bg-white border border-white/40 hover:border-blue-200 rounded-full text-gray-500 hover:text-blue-600 shadow-sm transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://wa.me/201067780600"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/60 hover:bg-white border border-white/40 hover:border-green-200 rounded-full text-gray-500 hover:text-green-600 shadow-sm transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Learning Paths */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider opacity-80">{t('footer.learningPaths')}</h3>
            <ul className="space-y-4">
              <li>
                <a href="/product-management" onClick={handleNav('/product-management')} className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-3 group text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-500/20 group-hover:bg-blue-500 transition-all"></span>
                  {t('nav.productManagement')}
                </a>
              </li>
              <li>
                <a href="/product-design" onClick={handleNav('/product-design')} className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-3 group text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-purple-500/20 group-hover:bg-purple-500 transition-all"></span>
                  {t('nav.productDesign')}
                </a>
              </li>
              <li>
                <a href="/user-research" onClick={handleNav('/user-research')} className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-3 group text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-all"></span>
                  {t('nav.userResearch')}
                </a>
              </li>
              <li>
                <a href="/ux-writing" onClick={handleNav('/ux-writing')} className="text-gray-600 hover:text-rose-600 transition-colors flex items-center gap-3 group text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-rose-500/20 group-hover:bg-rose-500 transition-all"></span>
                  {t('nav.uxWriting')}
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider opacity-80">{t('footer.explore')}</h3>
            <ul className="space-y-4">
              <li>
                <a href="/about" onClick={handleNav('/about')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium hover:translate-x-1 inline-block duration-200">{t('footer.aboutUs')}</a>
              </li>
              <li>
                <a href="/templates" onClick={handleNav('/templates')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium hover:translate-x-1 inline-block duration-200">Templates & Resources</a>
              </li>
              <li>
                <a href="/choose-your-path" onClick={handleNav('/choose-your-path')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium hover:translate-x-1 inline-block duration-200">{t('footer.comparePaths')}</a>
              </li>
              <li>
                <a href="/quiz" onClick={handleNav('/quiz')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium hover:translate-x-1 inline-block duration-200">{t('footer.careerAssessment')}</a>
              </li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider opacity-80">{t('footer.getStarted')}</h3>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('footer.getStartedDesc')}
              </p>
              <a 
                href="https://adplist.org/mentors/mohamed-ameen-UjZr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-900 text-white px-5 py-3 rounded-full hover:bg-gray-800 transition-all hover:shadow-lg hover:shadow-gray-900/20 text-sm font-medium w-full justify-center group"
              >
                <Calendar size={16} />
                {t('footer.bookMentorship')}
                <ArrowRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
              <a 
                href="/contact"
                onClick={handleNav('/contact')}
                className="flex items-center gap-3 bg-white/60 border border-white/40 hover:border-gray-300 text-gray-700 px-5 py-3 rounded-full hover:bg-white transition-all text-sm font-medium w-full justify-center shadow-sm"
              >
                <Mail size={16} />
                {t('footer.contactSupport')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 font-medium">
            &copy; {currentYear} StartInProduct. {t('footer.rightsReserved')}
          </p>
          <div className="flex gap-6 text-sm text-gray-500 items-center font-medium">
            <a href="/privacy" onClick={handleNav('/privacy')} className="hover:text-gray-900 transition-colors">{t('footer.privacyPolicy')}</a>
            <a href="/terms" onClick={handleNav('/terms')} className="hover:text-gray-900 transition-colors">{t('footer.termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
