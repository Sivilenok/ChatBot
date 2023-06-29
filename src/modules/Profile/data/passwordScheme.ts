import { passwordValidation } from 'shared';
import * as Yup from 'yup';

export const passwordScheme = Yup.object().shape({
  currentPassword: passwordValidation,
  password: passwordValidation,
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
    .required('Подтвердите новый пароль'),
});
