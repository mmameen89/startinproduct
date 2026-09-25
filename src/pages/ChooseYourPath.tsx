import { ArrowRight, CheckCircle, ClipboardCheck, ArrowLeftRight, Calendar } from 'lucide-react';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import { choosePathData } from '../data/choosePathData';

interface ChooseYourPathProps {
  onNavigate: (path: string) => void;
}

export function ChooseYourPath({ onNavigate }: ChooseYourPathProps) {
  const { t, language, dir } = useLanguage();
  const data = choosePathData[language];

  const handleBookSession = () => {
    window.open('https://adplist.org/mentors/mohamed-ameen-UjZr', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen" dir={dir}>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('choosePath.title')}
          </h1>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            {t('choosePath.subtitle')}
          </p>
          <div className="flex justify-center">
            <Button variant="primary" color="blue" onClick={() => onNavigate('/quiz')}>
              <ClipboardCheck size={20} className={`inline ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
              {t('choosePath.quizButton')}
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('choosePath.comparisonTitle')}
          </h2>

          {/* Mobile Scroll Hint */}
          <div className="md:hidden flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
            <ArrowLeftRight size={16} />
            <span>{language === 'en' ? 'Swipe to compare' : 'اسحب للمقارنة'}</span>
          </div>

          <div className="overflow-x-auto pb-4">
            <table className="w-full bg-white rounded-xl border-2 border-gray-200 min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className={`p-6 ${dir === 'rtl' ? 'text-right' : 'text-left'} text-gray-900 w-1/5`}>
                    {t('choosePath.table.aspect')}
                  </th>
                  <th className={`p-6 ${dir === 'rtl' ? 'text-right' : 'text-left'} text-gray-900 w-1/5`}>
                    {t('nav.productManagement')}
                  </th>
                  <th className={`p-6 ${dir === 'rtl' ? 'text-right' : 'text-left'} text-gray-900 w-1/5`}>
                    {t('nav.productDesign')}
                  </th>
                  <th className={`p-6 ${dir === 'rtl' ? 'text-right' : 'text-left'} text-gray-900 w-1/5`}>
                    {t('nav.userResearch')}
                  </th>
                  <th className={`p-6 ${dir === 'rtl' ? 'text-right' : 'text-left'} text-gray-900 w-1/5`}>
                    {t('nav.uxWriting')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.comparison.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="p-6 text-gray-900 font-medium">{row.aspect}</td>
                    <td className="p-6 text-gray-600">{row.pm}</td>
                    <td className="p-6 text-gray-600">{row.pd}</td>
                    <td className="p-6 text-gray-600">{row.ur}</td>
                    <td className="p-6 text-gray-600">{row.uw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Path Descriptions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('choosePath.deepDive.title')}
          </h2>

          {data.deepDive.map((role) => (
            <div
              key={role.id}
              className={`bg-gradient-to-br from-${role.color}-50 to-white rounded-2xl p-8 border-2 border-${role.color}-100`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 bg-${role.color}-600 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <role.icon size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2 font-bold text-xl">{role.title}</h3>
                  <p className="text-gray-600">{role.roleDescription}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-gray-900 mb-2 font-semibold">{t('choosePath.deepDive.whatYouWillDo')}</h4>
                  <ul className="space-y-2">
                    {role.whatYouWillDo.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle size={20} className={`text-${role.color}-600 flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-gray-900 mb-2 font-semibold">{t('choosePath.deepDive.youWillLoveIf')}</h4>
                  <ul className="space-y-2">
                    {role.youWillLoveThisIf.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <ArrowRight size={20} className={`text-${role.color}-600 flex-shrink-0 mt-0.5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button
                variant="primary"
                color={role.color as any}
                onClick={() => onNavigate(role.path)}
                className="w-full justify-center"
              >
                <span>{t('choosePath.deepDive.exploreButton')} {role.title}</span>
                <ArrowRight size={20} className={dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'} />
              </Button>
            </div>
          ))}

        </div>
      </section>

      {/* Decision Framework */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            {t('choosePath.decision.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.decision.map((card, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 border-2 border-${card.color}-100`}>
                <div className={`w-12 h-12 bg-${card.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <card.icon size={24} className={`text-${card.color}-600`} />
                </div>
                <h3 className="text-gray-900 mb-3 font-bold">{card.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {card.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Overlap Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            {t('choosePath.overlap.title')}
          </h2>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200">
            <p className="text-gray-600 mb-6">
              {t('choosePath.overlap.desc')}
            </p>

            <ul className="space-y-3 mb-6">
              {data.overlap.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-600">
              {t('choosePath.overlap.learning').split('**').map((part, i) =>
                i % 2 === 1 ? <strong key={i}>{part}</strong> : part
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Take Assessment CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <ClipboardCheck size={48} className="mx-auto text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('choosePath.assessment.title')}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('choosePath.assessment.desc')}
          </p>
          <div className="flex justify-center">
            <Button variant="primary" color="blue" onClick={() => onNavigate('/quiz')}>
              <ClipboardCheck size={20} className={`inline ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
              {t('choosePath.assessment.button')}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 md:p-12 text-center border border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('choosePath.guidance.title')}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('choosePath.guidance.desc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" color="blue" onClick={handleBookSession}>
                <Calendar size={20} className={`inline ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                {t('common.bookMentorship')}
              </Button>
              <Button
                variant="outline"
                color="blue"
                className="bg-white hover:bg-blue-50 border-blue-200"
                onClick={() => onNavigate('/contact')}
              >
                {t('common.contactSupport')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
