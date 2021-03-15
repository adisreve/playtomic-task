import React from 'react';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { LinearProgress } from '@material-ui/core';

import { AppState } from '../store';

export const AuthLoaded = ({ children }: any) => {
  const firebase = useFirebase();
  const authToken = sessionStorage.getItem('authToken');
  const auth = useSelector((state: AppState) => state.firebase.auth);

  if (authToken && !auth.isLoaded)
    firebase
      .auth()
      .signInWithCustomToken(authToken)
      .then(res => res)
      .catch(err => err);

  if (!auth.isLoaded) return <LinearProgress />;

  return children;
};
