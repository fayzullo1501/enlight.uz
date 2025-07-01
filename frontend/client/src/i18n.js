import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationRU from './locales/ru.json';
import translationUZ from './locales/uz.json';
import translationEN from './locales/en.json';

const savedLang = localStorage.getItem('lang') || 'ru';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: translationRU },
      uz: { translation: translationUZ },
      en: { translation: translationEN },
    },
    lng: savedLang,
    fallbackLng: 'ru',
    interpolation: { escapeValue: false },
  });

export const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
  localStorage.setItem('lang', lang);
};

export default i18n;
