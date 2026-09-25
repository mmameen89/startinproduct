import { Calendar, Clock, TrendingUp, Award, ArrowDown } from 'lucide-react';
import { Button } from '../components/Button';
import { PhaseCard } from '../components/PhaseCard';
import { CTASection } from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';
import { usePathsData } from '../hooks/usePathsData';

interface ProductManagementPathProps {
  onNavigate: (path: string) => void;
}

export function ProductManagementPath({ onNavigate }: ProductManagementPathProps) {
  const { t, language, dir } = useLanguage();
  const { data: pathsData, loading } = usePathsData();

  const handleBookSession = () => {
    window.open('https://adplist.org/mentors/mohamed-ameen-UjZr', '_blank', 'noopener,noreferrer');
  };

  const scrollToLearningPhases = () => {
    const element = document.getElementById('learning-phases');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const phases = pathsData[language].pm.phases;

  return (
    <div className="min-h-screen pb-20" dir={dir}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8 flex flex-wrap gap-3">
            <span className="bg-blue-100/50 backdrop-blur-sm text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-200/50">{t('paths.common.beginner')}</span>
            <span className="bg-blue-100/50 backdrop-blur-sm text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-200/50">{t('paths.common.structuredRoadmap')}</span>
            <span className="bg-blue-100/50 backdrop-blur-sm text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-200/50">{t('paths.common.mentorSupport')}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">{t('paths.pm.title')}</h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl">
            {t('paths.pm.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" color="blue" size="lg" onClick={scrollToLearningPhases}>
              <ArrowDown size={20} className={`inline ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
              {t('paths.common.startPath')}
            </Button>
            <Button variant="outline" color="blue" size="lg" onClick={handleBookSession}>
              <Calendar size={20} className={`inline ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
              {t('common.bookMentorship')}
            </Button>
          </div>
        </div>
      </section>

      {/* Path Overview */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            <div className="pt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('paths.common.pathOverview')}</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {t('paths.pm.overview1')}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('paths.pm.overview2')}
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-[40px] p-10 shadow-xl shadow-blue-900/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-blue-50/80 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-100/50">
                    <Clock size={28} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1 uppercase tracking-wide">{t('paths.common.duration')}</div>
                    <div className="text-xl font-bold text-gray-900">{t('paths.common.months')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-blue-50/80 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-100/50">
                    <TrendingUp size={28} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1 uppercase tracking-wide">{t('paths.common.level')}</div>
                    <div className="text-xl font-bold text-gray-900">{t('paths.common.beginner')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-blue-50/80 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-100/50">
                    <Award size={28} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1 uppercase tracking-wide">{t('paths.common.format')}</div>
                    <div className="text-xl font-bold text-gray-900">{t('paths.common.selfPaced')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Phases */}
      <section id="learning-phases" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-20 text-center tracking-tight">{t('paths.common.learningPhases')}</h2>

          {/* Phases */}
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <PhaseCard key={index} {...phase} color="blue" />
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure Banner */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center bg-white/40 backdrop-blur-xl border border-white/50 rounded-[48px] p-16 shadow-lg shadow-gray-200/10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">{t('paths.pm.notSureTitle')}</h2>
          <p className="text-gray-600 mb-10 text-xl max-w-2xl mx-auto">
            {t('paths.pm.notSureDesc')}
          </p>
          <Button variant="secondary" color="gray" onClick={() => onNavigate('/choose-your-path')}>
            <span>{t('paths.common.comparePaths')}</span>
          </Button>
        </div>
      </section>

      {/* Mentoring CTA */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <CTASection
            title={t('paths.pm.ctaTitle')}
            description={t('paths.pm.ctaDesc')}
            primaryButtonText={t('common.bookMentorship')}
            secondaryButtonText={t('common.contactSupport')}
            onPrimaryClick={handleBookSession}
            onSecondaryClick={() => onNavigate('/contact')}
            color="blue"
            variant="colored"
          />
        </div>
      </section>
    </div>
  );
}
