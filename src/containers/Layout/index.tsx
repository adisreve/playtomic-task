import React from 'react';
import { CssBaseline, Container, Grid } from '@material-ui/core';

import { TopBar } from '../../components/TopBar';
import { Sidebar } from '../../components/Sidebar';

import { useStyles } from './style';

export const Layout: React.FC = ({ children }: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            {children && children}
          </Grid>
        </Container>
      </main>
    </div>
  );
};
