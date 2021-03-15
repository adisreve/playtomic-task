import React from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppState } from '../store';

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }: PrivateRouteProps) => {
  const auth = useSelector((state: AppState) => state.firebase.auth);

  return (
    <Route
      {...rest}
      render={props => {
        return auth.isLoaded && !auth.isEmpty ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
