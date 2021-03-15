import React from 'react';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

import { Avatar, CssBaseline, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { AppState } from '../../store';
import { Form } from '../../components/Form';

import { useStyles } from './style';

export const Login: React.FC = () => {
  const classes = useStyles();
  const auth = useSelector((state: AppState) => state.firebase.auth);

  if (isLoaded(auth) && !isEmpty(auth)) return <Redirect to="/" />;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h5">Playtomic Test Task - Adis Jugo</Typography>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form />
      </div>
    </Container>
  );
};
