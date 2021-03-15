import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Drawer, Divider, ListItem, ListItemText, ListItemIcon, Typography } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SettingsIcon from '@material-ui/icons/Settings';

import { useStyles } from './style';

export const Sidebar: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }} open>
      <Typography variant="h5" component="h3" className={classes.title}>
        Dashboard
      </Typography>
      <Divider />
      <ListItem button component={NavLink} to="/dashboard" selected={['/', '/dashboard'].includes(location.pathname)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={NavLink} to="/settings" selected={location.pathname === '/settings'}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings/Users" />
      </ListItem>
      <Divider />
    </Drawer>
  );
};
