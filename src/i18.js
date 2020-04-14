import I18 from '@lskjs/i18';
import enResource from './translations/en.json';
import ruResource from './translations/ru.json';

const i18 = new I18({
  config: {
    locales: ['en', 'ru'],
    resources: {
      en: {
        translation: enResource,
      },
      ru: {
        translation: ruResource,
      },
    },
  },
});

i18.init({
  lng: 'ru'
});

export default i18;
