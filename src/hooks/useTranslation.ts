import { useContext } from 'react';
import { LanguageContext, Language } from '../context/LanguageContext';
import { translations } from '../data/translations';

export function useTranslation() {
  const { lang, setLang } = useContext(LanguageContext);

  const t = (key: keyof typeof translations): string => {
    return translations[key]?.[lang] || '';
  };

  const tObj = <T extends Record<string, any>>(obj: T, field: string): any => {
    const keyEn = `${field}En`;
    const keyAr = `${field}Ar`;
    if (lang === 'en') {
      return obj[keyEn] !== undefined ? obj[keyEn] : (obj[field] !== undefined ? obj[field] : '');
    } else {
      return obj[keyAr] !== undefined ? obj[keyAr] : (obj[field] !== undefined ? obj[field] : '');
    }
  };

  const tVal = (valObj: { en: string; ar: string } | undefined): string => {
    return valObj?.[lang] || '';
  };

  return { lang, setLang, t, tObj, tVal };
}
