import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { PrivateRoute } from './components';
import { Login, Dashboard, Settings, Layout } from './containers';
import { AuthLoaded } from './util/authLoaded';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <AuthLoaded>
        <Layout>
          <PrivateRoute path={['/', '/dashboard']} component={Dashboard} exact />
          <PrivateRoute path="/settings" component={Settings} />
        </Layout>
      </AuthLoaded>
    </Switch>
  </BrowserRouter>
);
