import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/Button';
import { Home } from 'lucide-react';

interface NotFoundProps {
  onNavigate: (path: string) => void;
}

export function NotFound({ onNavigate }: NotFoundProps) {
  const { language, dir } = useLanguage();

  const content = {
    en: {
      title: "Page Not Found",
      desc: "Sorry, the page you are looking for does not exist or has been moved.",
      button: "Back to Home"
    },
    ar: {
      title: "الصفحة غير موجودة",
      desc: "عفواً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
      button: "العودة للرئيسية"
    }
  };

  const t = content[language];

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4" dir={dir}>
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-gray-200 mb-6">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.title}</h2>
        <p className="text-gray-600 mb-8">{t.desc}</p>
        <Button onClick={() => onNavigate('/')} variant="primary">
          <Home size={20} className={dir === 'rtl' ? 'ml-2' : 'mr-2'} />
          {t.button}
        </Button>
      </div>
    </div>
  );
}
