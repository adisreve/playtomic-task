import { ACTIONS, ProductActionTypes, Product } from './types';

const initialState: Product = {
  products: [],
  loading: false,
};

const productReducer = (state = initialState, action: ProductActionTypes) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
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

export default productReducer;
