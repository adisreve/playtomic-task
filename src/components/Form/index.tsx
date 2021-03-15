import React from 'react';

import Alert from '@material-ui/lab/Alert';
import { Button, TextField, Box } from '@material-ui/core';
import GoogleButton from 'react-google-button';

import useForm from '../../util/useForm';
import { useStyles } from './style';

const initialValues = {
  email: '',
  password: '',
};

export const Form: React.FC = () => {
  const classes = useStyles();

  const { values, handleInputChange, handleSubmit, handleGoogleLogin, errors } = useForm(initialValues);

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        error={!!(errors.email && errors.email)}
        helperText={errors.email && errors.email}
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={handleInputChange}
        value={values.email}
      />
      <TextField
        variant="outlined"
        margin="normal"
        error={!!(errors.password && errors.password)}
        helperText={errors.password && errors.password}
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={handleInputChange}
        value={values.password}
      />
      <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
        Sign In
      </Button>
      <GoogleButton onClick={() => handleGoogleLogin()} style={{ width: '100%' }} />
      <Box pt={2}>{errors.auth && <Alert severity="error">{errors.auth}</Alert>}</Box>
    </form>
  );
};
