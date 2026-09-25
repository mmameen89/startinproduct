import { Briefcase, Palette, Search, Target, Map, MessageSquare, PenTool, Sparkles } from 'lucide-react';
import { PathCard } from '../components/PathCard';
import { Button } from '../components/Button';
import { CTASection } from '../components/CTASection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const { t, dir } = useLanguage();

  const handleBookSession = () => {
    window.open('https://adplist.org/mentors/mohamed-ameen-UjZr', '_blank', 'noopener,noreferrer');
  };

  const scrollToChoosePath = () => {
    const element = document.getElementById('choose-your-path');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen mesh-gradient-subtle" dir={dir}>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <Sparkles size={16} />
                <span>{t('about.badge')}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {t('home.heroTitle')}
              </h1>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {t('home.heroSubtitle')}
              </p>
              <p className="text-sm text-gray-500 mb-8 font-medium">
                {t('home.heroBadge')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" onClick={scrollToChoosePath} size="lg">
                  {t('home.explorePaths')}
                </Button>
                <Button variant="outline" onClick={() => onNavigate('/choose-your-path')} size="lg">
                  <Target size={20} className={`inline ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                  {t('home.whichPathFits')}
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630673489068-d329fa4e2767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjBzdGlja3klMjBub3RlcyUyMHdpcmVmcmFtZXMlMjB3aGl0ZWJvYXJkfGVufDF8fHx8MTc2NDMzNjMxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Product team collaboration with sticky notes and wireframes"
                className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
              />
              {/* Path indicators */}
              <div className={`absolute -bottom-6 ${dir === 'rtl' ? '-right-6' : '-left-6'} bg-white rounded-xl shadow-lg p-4 hidden sm:flex items-center gap-3`}>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Briefcase size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">{t('nav.productManagement')}</div>
                </div>
              </div>
              <div className={`absolute top-6 ${dir === 'rtl' ? '-left-6' : '-right-6'} bg-white rounded-xl shadow-lg p-4 hidden sm:flex items-center gap-3`}>
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Palette size={20} className="text-purple-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">{t('nav.productDesign')}</div>
                </div>
              </div>
              <div className={`absolute bottom-1/3 ${dir === 'rtl' ? '-left-6' : '-right-6'} bg-white rounded-xl shadow-lg p-4 hidden sm:flex items-center gap-3`}>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Search size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">{t('nav.userResearch')}</div>
                </div>
              </div>
              <div className={`absolute top-6 ${dir === 'rtl' ? '-right-6' : '-left-6'} bg-white rounded-xl shadow-lg p-4 hidden sm:flex items-center gap-3`}>
                <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
                  <MessageSquare size={20} className="text-rose-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">{t('nav.uxWriting')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('home.whoFor')}</h2>
          <p className="text-gray-600 mb-12">
            {t('home.whoForSubtitle')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 glass-panel rounded-[32px]">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target size={24} className="text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2 font-bold">{t('home.noExperience')}</h3>
              <p className="text-gray-600">{t('home.noExperienceDesc')}</p>
            </div>
            <div className="p-8 glass-panel rounded-[32px]">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Map size={24} className="text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-2 font-bold">{t('home.structuredPlan')}</h3>
              <p className="text-gray-600">{t('home.structuredPlanDesc')}</p>
            </div>
            <div className="p-8 glass-panel rounded-[32px]">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={24} className="text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2 font-bold">{t('home.guidedByMentor')}</h3>
              <p className="text-gray-600">{t('home.guidedByMentorDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Not Sure Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('home.notSureTitle')}</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {t('home.notSureDesc')}
          </p>
          <Button
            variant="primary"
            color="blue"
            size="lg"
            className="mx-auto"
            onClick={() => onNavigate('/choose-your-path')}
          >
            <Map size={20} className={dir === 'rtl' ? 'ml-2' : 'mr-2'} />
            {t('home.readGuide')}
          </Button>
        </div>
      </section>

      {/* Three Path Cards */}
      <section id="choose-your-path" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">{t('home.choosePathTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PathCard
              title={t('nav.productManagement')}
              description={t('home.pmDesc')}
              color="blue"
              icon={<Briefcase size={48} />}
              onNavigate={() => onNavigate('/product-management')}
              buttonText={t('common.viewPath')}
            />
            <PathCard
              title={t('nav.productDesign')}
              description={t('home.pdDesc')}
              color="purple"
              icon={<Palette size={48} />}
              onNavigate={() => onNavigate('/product-design')}
              buttonText={t('common.viewPath')}
            />
            <PathCard
              title={t('nav.userResearch')}
              description={t('home.urDesc')}
              color="green"
              icon={<Search size={48} />}
              onNavigate={() => onNavigate('/user-research')}
              buttonText={t('common.viewPath')}
            />
            <PathCard
              title={t('nav.uxWriting')}
              description={t('home.uwDesc')}
              color="rose"
              icon={<PenTool size={48} />}
              onNavigate={() => onNavigate('/ux-writing')}
              buttonText={t('common.viewPath')}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">{t('home.howItWorks')}</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-200"></div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-gray-900 mb-3">{t('home.pickPath')}</h3>
              <p className="text-gray-600">{t('home.pickPathDesc')}</p>
            </div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="text-gray-900 mb-3">{t('home.followRoadmap')}</h3>
              <p className="text-gray-600">{t('home.followRoadmapDesc')}</p>
            </div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="text-gray-900 mb-3">{t('home.getMentoring')}</h3>
              <p className="text-gray-600">{t('home.getMentoringDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <CTASection
            title={t('home.readyToStart')}
            description={t('home.readyToStartDesc')}
            primaryButtonText={t('common.bookMentorship')}
            secondaryButtonText={t('common.contactSupport')}
            onPrimaryClick={handleBookSession}
            onSecondaryClick={() => onNavigate('/contact')}
            color="blue"
          />
        </div>
      </section>
    </div>
  );
}
