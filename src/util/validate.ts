import { FormType, ErrorType } from '../types/form';

const validate = (values: FormType) => {
  const errors: ErrorType = {};

  if (!values.email) {
    errors.email = 'Please enter email address.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Please enter valid email address.';
  }

  if (!values.password || values.password.length < 6) {
    errors.password = 'Please enter valid password.';
  }

  return errors;
};

export default validate;
