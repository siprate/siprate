import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from './locales/en/common.json';
import commonPt from './locales/pt/common.json';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: commonEn,
      },
      pt: {
        common: commonPt,
      },
    },
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;