import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import EnLanguage from '../lang/EnLanguage.json';
import FrLanguage from '../lang/FrLanguage.json';


const resources = {
  en: { translation: EnLanguage },
  fr: { translation: FrLanguage },
};

i18n
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
