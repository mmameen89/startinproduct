import { Linkedin, Mail, MessageSquare, Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import { useMentorsData } from '../hooks/useMentorsData';

interface MentorsProps {
  onNavigate: (path: string) => void;
}

export function Mentors({ onNavigate }: MentorsProps) {
  const { t, language, dir } = useLanguage();
  const { data: mentorsData, loading } = useMentorsData();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const mentors = mentorsData[language];

  const handleBookSession = (adplistUrl: string) => {
    window.open(adplistUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen" dir={dir}>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('mentorsPage.title')}
          </h1>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            {t('mentorsPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="p-8 flex flex-col h-full">
                  {/* Profile Photo */}
                  <div className="flex justify-center mb-6">
                    <div className={`w-32 h-32 rounded-full overflow-hidden border-4 shadow-lg ${mentor.accentColor === 'blue' ? 'border-blue-500' :
                        mentor.accentColor === 'purple' ? 'border-purple-500' :
                          mentor.accentColor === 'green' ? 'border-green-500' :
                            'border-rose-500'
                      }`}>
                      <ImageWithFallback
                        src={mentor.image}
                        alt={`Profile photo of ${mentor.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Mentor Info */}
                  <div className="text-center mb-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h2>
                    <p className="text-gray-600 text-sm">{mentor.title}</p>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {mentor.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className={`text-xs px-2 py-1 rounded-full ${mentor.accentColor === 'blue' ? 'bg-blue-100 text-blue-700' :
                            mentor.accentColor === 'purple' ? 'bg-purple-100 text-purple-700' :
                              mentor.accentColor === 'green' ? 'bg-green-100 text-green-700' :
                                'bg-rose-100 text-rose-700'
                          }`}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-1 text-center">
                    {mentor.bio}
                  </p>

                  {/* CTAs */}
                  <div className="space-y-4 mt-auto">
                    <Button
                      variant="primary"
                      color={mentor.accentColor}
                      onClick={() => handleBookSession(mentor.adplist)}
                      className="w-full"
                    >
                      <Calendar size={18} className={`inline ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                      {t('common.bookMentorship')}
                    </Button>

                    {/* Secondary CTAs */}
                    <div className="flex justify-center gap-3">
                      <a
                        href={mentor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white border border-gray-200 rounded-lg text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>

                      <a
                        href={`mailto:${mentor.email}`}
                        className="p-2 bg-white border border-gray-200 rounded-lg text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-colors"
                        aria-label="Email"
                      >
                        <Mail size={18} />
                      </a>

                      <a
                        href={mentor.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white border border-gray-200 rounded-lg text-gray-500 hover:text-green-600 hover:border-green-300 transition-colors"
                        aria-label="WhatsApp"
                      >
                        <MessageSquare size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('mentorsPage.ctaTitle')}</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('mentorsPage.ctaDesc')}
          </p>
          <Button
            variant="primary"
            color="blue"
            onClick={() => onNavigate('/')}
          >
            <ArrowRight size={20} className={`inline ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
            {t('home.explorePaths')}
          </Button>
        </div>
      </section>
    </div>
  );
}
