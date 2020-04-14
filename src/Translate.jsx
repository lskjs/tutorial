import React from 'react';
import { inject, observer } from 'mobx-react';
import Button from '@lskjs/button';
import T from '@lskjs/ui/T';

function Translate({ i18 }) {
  return (
    <div>
      <h1>{i18.t('helloWorld')}</h1>
      <Button
        paint="primary"
        onClick={() => {
          const nextLocale = i18.locale === 'ru' ? 'en' : 'ru';
          i18.setLocale(nextLocale);
        }}
      >
        <T name="button.changeLanguage" />
      </Button>
    </div>
  );
}

export default inject('i18')(observer(Translate));
