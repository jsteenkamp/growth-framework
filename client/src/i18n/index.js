import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
// importing local namespace bundles, these can be loaded from server
import appEN from './locales/en/application.json';
import appDE from './locales/de/application.json';
import appJP from './locales/jp/application.json';
import commEN from './locales/en/common.json';
import commDE from './locales/de/common.json';
import commJP from './locales/jp/common.json';
import compEN from './locales/en/components.json';
import compDE from './locales/de/components.json';
import compJP from './locales/jp/components.json';
import viewEN from './locales/en/views.json';
import viewDE from './locales/de/views.json';
import viewJP from './locales/jp/views.json';

// language detector ensures that the i18n.language value is set
i18n.use(detector).use(reactI18nextModule).init({
  // whitelist: ['en', 'de', 'jp'],
  fallbackLng: 'en',
  // have a common namespace used around the full app
  ns: ['application'],
  defaultNS: 'application',
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
  resources: {
    en: { application: appEN, common: commEN, components: compEN, views: viewEN, },
    de: { application: appDE, common: commDE, components: compDE, views: viewDE, },
    jp: { application: appJP, common: commJP, components: compJP, views: viewJP, },
  },
  saveMissing: true,
  // can be handled on server
  missingKeyHandler: (lang, ns, key, fallbackValue) => {
    // use debug: true or decide how to handle missing keys
    //console.error('Missing Key', key, lang, ns, fallbackValue);
  },
});

export default i18n;
