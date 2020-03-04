import createForm from '@lskjs/form/createForm';
import Input from '@lskjs/form/controls/Input';
import Select from '@lskjs/form/controls/Select';
import FormView from './FormView';

const Form = createForm({
  view: FormView,
  controls: {
    input: {
      title: 'Текстовое поле',
      placeholder: 'Введите текст',
      component: Input,
    },
    select: {
      title: 'Выбор варианта',
      placeholder: 'Выберите вариант',
      component: Select,
      options: [
        {
          value: 'two',
          title: 'Два',
        },
        {
          value: 'one',
          title: 'Один',
        },
        {
          value: 'three',
          title: 'Три',
        },
        {
          value: 'four',
          title: 'Четыре',
        },
      ],
    },
  },
});

export default Form;