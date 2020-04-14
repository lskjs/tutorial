import I18 from '@lskjs/i18';

const i18 = new I18({
  config: {
    locales: ['en', 'ru'],
    resources: {
      en: {
        translation: {
          helloWorld: 'Hello World',
          button: {
            changeLanguage: 'Change language',
          },
        },
      },
      ru: {
        translation: {
          helloWorld: 'Привет Мир',
          button: {
            changeLanguage: 'Сменить язык',
          },
        },
      },
    },
  },
});

i18.init({
  lng: 'ru'
});

export default i18;
