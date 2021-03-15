import { useState, FormEvent, ChangeEvent } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

import { FormType, ErrorType } from '../types/form';
import validate from './validate';

const useForm = (initialValues: any) => {
  const [errors, setErrors] = useState(<ErrorType>{});
  const [values, setValues] = useState(initialValues);

  const history = useHistory();
  const firebase = useFirebase();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate(values);
    const hasErrors = Object.keys(validationErrors).length !== 0;

    if (!hasErrors) {
      firebase
        .login(values)
        .then(async res => {
          if (res.user) {
            const tokenResult = await firebase.auth().currentUser?.getIdTokenResult();
            if (tokenResult?.token) sessionStorage.setItem('authToken', tokenResult.token);

            history.push('/');
          }
        })
        .catch(() => setErrors({ auth: 'Invalid credentials.' }));
    } else {
      // eslint-disable-next-line no-console
      console.log('Errors try again', validationErrors);
    }
  };

  const handleGoogleLogin = () => {
    firebase.login({ provider: 'google', type: 'popup' }).then(async res => {
      if (res.user) {
        const tokenResult = await firebase.auth().currentUser?.getIdTokenResult();
        if (tokenResult?.token) sessionStorage.setItem('authToken', tokenResult.token);

        history.push('/');
      }
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues((inputs: FormType) => ({ ...inputs, [event.target.name]: event.target.value }));
    setErrors({});
  };

  return {
    handleSubmit,
    handleInputChange,
    handleGoogleLogin,
    values,
    errors,
  };
};

export default useForm;
