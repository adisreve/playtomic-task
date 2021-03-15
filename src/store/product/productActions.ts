import Product from '../../service/product';
import { ACTIONS, ProductType } from './types';

export const getProducts = () => async (dispatch: Function, getState: any) => {
  try {
    const {
      productReducer: { products },
    } = getState();

    if (products?.length) return Promise.resolve();

    const { data, status } = await Product.getProducts();

    let allProducts: ProductType[] | [] = [];

    if (status === 200) {
      allProducts = data;
      dispatch({ type: ACTIONS.GET_PRODUCTS, payload: allProducts });
    }
    return allProducts;
  } catch (error) {
    return error;
  }
};
