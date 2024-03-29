import * as yup from 'yup';
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
export const validationSchema = yup.object().shape({
  email: yup.string().required().email(),
  name: yup.string().required().max(20).min(3),
  password: yup
    .string()
    .required()
    .matches(
      passwordRegExp,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
});
