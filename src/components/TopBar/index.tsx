import React from 'react';

import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';

import { AppState } from '../../store';
import { useStyles } from './style';

export const TopBar: React.FC = () => {
  const auth = useSelector((state: AppState) => state.firebase.auth);

  const classes = useStyles();
  const firebase = useFirebase();

  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography component="h3" className={classes.email}>
          {auth.displayName ? auth.displayName : auth.email}
        </Typography>
        <Button variant="contained" color="secondary" onClick={() => firebase.logout()}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};
