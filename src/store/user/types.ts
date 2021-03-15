export const ACTIONS = {
  GET_USERS: 'users/get_users',
  SET_LOADING: 'users/set_loading',
};

export interface UserType {
  id: number;
  email: string;
  username: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}

export interface User {
  users: UserType[] | [];
  loading: boolean;
}

interface GetAllUsers {
  type: typeof ACTIONS.GET_USERS;
  payload: Array<string | number>;
}

interface SetLoading {
  type: typeof ACTIONS.SET_LOADING;
  payload: Array<string | number>;
}

export type UserActionTypes = GetAllUsers | SetLoading;
