import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, List, ListItem, ListItemText, ListItemAvatar, CircularProgress, Grid } from '@material-ui/core';

import { AppState } from '../../store';
import { UserType } from '../../store/user/types';
import { getUsers } from '../../store/user/userActions';

import { useStyles } from './style';

export const Settings: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state: AppState) => state.userReducer);

  useEffect(() => {
    (async () => {
      dispatch(getUsers());
    })();
  }, [dispatch]);

  if (loading)
    return (
      <div>
        <CircularProgress />
      </div>
    );

  return (
    <Grid container>
      <List className={classes.root}>
        {users &&
          users.map((u: UserType) => (
            <ListItem key={u.id}>
              <ListItemAvatar>
                <Avatar>{`${u.name.firstname.substr(0, 1).toUpperCase()}${u.name.lastname
                  .substr(0, 1)
                  .toUpperCase()}`}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={u.username} secondary={u.email} />
            </ListItem>
          ))}
      </List>
    </Grid>
  );
};
