import React from 'react';
import Button from '@lskjs/button';
import { Form, FastField } from 'formik';

const FormView = ({ control, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FastField {...control('input')} />
      <FastField {...control('select')} />
      <Button paint="primary" type="submit">Отправить</Button>
    </Form>
  );
};

export default FormView;