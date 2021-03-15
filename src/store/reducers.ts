import { combineReducers } from 'redux';
import { firebaseReducer, FirebaseReducer } from 'react-redux-firebase';
import productReducer from './product/productReducer';
import userReducer from './user/userReducer';

interface RootState {
  firebase: FirebaseReducer.Reducer;
  productReducer: any;
  userReducer: any;
}

export const rootReducer = combineReducers<RootState>({
  firebase: firebaseReducer,
  productReducer,
  userReducer,
});
