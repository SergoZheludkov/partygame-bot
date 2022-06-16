import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './locales';
import { Languages } from './types';

export const getDefaultI18n = (config?: Partial<InitOptions>) => {
  i18n.use(initReactI18next).init({
    lng: Languages.ENGLISH,
    fallbackLng: [Languages.ENGLISH, Languages.RUSSIA],
    resources,
    ns: ['common'],
    defaultNS: 'common',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    ...config,
  });

  return i18n;
};
