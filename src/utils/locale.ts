import 'intl-pluralrules';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as en from '@locale/en.json';
import * as lt from '@locale/lt.json';

const resources = {en, lt};

console.log({en});

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
