import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        contact: require('../locales/en/contact.json'),
      },
      es: {
        contact: require('../locales/es/contact.json'),
      },
      eu: {
        contact: require('../locales/eu/contact.json'),
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
