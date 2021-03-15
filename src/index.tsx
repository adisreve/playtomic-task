import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import { Routes } from './routes';
import store from './store';
import firebase from './config/firebase';

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Routes />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);
