import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations } from '../data/translations';

export type Language = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: Direction;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const path = window.location.pathname;
    if (path.startsWith('/ar')) return 'ar';
    if (path.startsWith('/en')) return 'en';
    const saved = localStorage.getItem('language') as Language;
    return saved === 'ar' ? 'ar' : 'en';
  });
  const dir: Direction = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    localStorage.setItem('language', language);

    const path = window.location.pathname;
    const pathWithoutLanguage = path.replace(/^\/(en|ar)(?=\/|$)/, '') || '/';
    const localizedPath = `/${language}${pathWithoutLanguage === '/' ? '' : pathWithoutLanguage}`;
    if (localizedPath !== path) {
      window.history.replaceState(null, '', `${localizedPath}${window.location.search}${window.location.hash}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  }, [dir, language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) value = (value as Record<string, unknown>)[k];
      else return key;
    }
    return typeof value === 'string' ? value : key;
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
