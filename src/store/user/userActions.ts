import User from '../../service/user';
import { ACTIONS, UserType } from './types';

export const getUsers = () => async (dispatch: Function, getState: any) => {
  try {
    const {
      userReducer: { users },
    } = getState();

    if (users?.length) return Promise.resolve();

    const { data, status } = await User.getUsers();

    let allUsers: UserType[] | [] = [];

    if (status === 200) {
      allUsers = data;
      dispatch({ type: ACTIONS.GET_USERS, payload: allUsers });
    }
    return allUsers;
  } catch (error) {
    return error;
  }
};
