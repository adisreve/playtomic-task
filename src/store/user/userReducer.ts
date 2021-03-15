import { ACTIONS, UserActionTypes, User } from './types';

const initialState: User = {
  users: [],
  loading: false,
};

const userReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case ACTIONS.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
