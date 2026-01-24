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
    // Check URL first
    const path = window.location.pathname;
    if (path.startsWith('/ar')) return 'ar';
    if (path.startsWith('/en')) return 'en';

    // Fallback to saved preference
    const saved = localStorage.getItem('language') as Language;
    return (saved === 'en' || saved === 'ar') ? saved : 'en';
  });
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    localStorage.setItem('language', language);

    // Update URL path to reflect language without reloading
    const path = window.location.pathname;
    const isAr = path.startsWith('/ar');
    const isEn = path.startsWith('/en');

    // If path already has strict language prefix, update it
    // If standard path (e.g. /), maybe we don't force prefix unless requested?
    // Requirement says "direct link /ar or /en", so let's enforce it cleanly.

    let newPath = path;
    if (language === 'ar' && !isAr) {
      if (isEn) newPath = path.replace(/^\/en/, '/ar');
      else newPath = '/ar' + (path === '/' ? '' : path);
    } else if (language === 'en' && !isEn) {
      if (isAr) newPath = path.replace(/^\/ar/, '/en');
      // Optional: for English, we usually keep root clean (e.g. / instead of /en) 
      // but user asked for "direct link /ar or /en", implying explicitly actionable links.
      // However, typical behavior is / (en) and /ar. 
      // Let's support both but prioritize keeping URL clean if EN, OR strictly enforce /en if that's what user means.
      // Given "mark lang selection with direct link /ar or / en", I will update state to reflect the prefix if changed.
      else if (path.startsWith('/ar')) newPath = path.replace(/^\/ar/, ''); // Strip ar to go back to default (en)
    }

    if (newPath !== path) {
      window.history.replaceState(null, '', newPath);
    }

  }, [dir, language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return value as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
