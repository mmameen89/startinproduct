import { Users, Compass, BookOpen, Target } from 'lucide-react';

import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  const { t, dir } = useLanguage();

  return (
    <div className="min-h-screen" dir={dir}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h1>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            {t('about.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" color="blue" onClick={() => onNavigate('/')}>
              {t('home.explorePaths')}
            </Button>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('about.missionTitle')}</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('about.missionDesc')}
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('about.offerTitle')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('about.offerDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.features.pathsTitle')}</h3>
              <p className="text-gray-600">
                {t('about.features.pathsDesc')}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.features.mentorshipTitle')}</h3>
              <p className="text-gray-600">
                {t('about.features.mentorshipDesc')}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.features.resourcesTitle')}</h3>
              <p className="text-gray-600">
                {t('about.features.resourcesDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('about.whoForTitle')}</h2>
              <p className="text-gray-600 mb-8 text-lg">
                {t('about.whoForSubtitle')}
              </p>
              <div className="space-y-4">
                {/* We use a static array for now, assuming the order matches translation */}
                {[
                  t('about.roles.0'),
                  t('about.roles.1'),
                  t('about.roles.2'),
                  t('about.roles.3')
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Target size={14} />
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <span className="block text-3xl font-bold text-blue-600 mb-2">4+</span>
                <span className="text-gray-600 text-sm">{t('about.stats.tracks')}</span>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <span className="block text-3xl font-bold text-purple-600 mb-2">6-9</span>
                <span className="text-gray-600 text-sm">{t('about.stats.roadmap')}</span>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <span className="block text-3xl font-bold text-green-600 mb-2">1:1</span>
                <span className="text-gray-600 text-sm">{t('about.stats.mentorship')}</span>
              </div>
              <div className="bg-rose-50 p-6 rounded-xl text-center">
                <span className="block text-3xl font-bold text-rose-600 mb-2">∞</span>
                <span className="text-gray-600 text-sm">{t('about.stats.possibilities')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('about.ctaTitle')}</h2>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            {t('about.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              color="blue"
              onClick={() => window.open('https://adplist.org/mentors/mohamed-ameen-UjZr', '_blank', 'noopener,noreferrer')}
            >
              {t('common.bookMentorship')}
            </Button>
            <Button
              variant="outline"
              color="blue"
              onClick={() => onNavigate('/contact')}
            >
              {t('common.contactSupport')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
