import { object, string } from 'yup';

export const validationSchema = object({
  cartName: string()
    .matches(/^(?!\s+$)/, 'Так не получится =]')
    .min(2, 'Минимум 2 символа')
    .required('Укажите имя или название организации'),
  cartEmail: string()
    .min(7, 'Минимум 7 символов')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/,
      'Некорректная почта',
    )
    .required('Укажите электронную почту'),
  cartPhone: string()
    .matches(/^\+?\d*$/, 'Только цифры и символ +')
    .min(10, 'Минимум 10 цифр')
    .max(12, 'Максимум 11 цифр и символ +')
    .required('Укажите телефон'),
});
