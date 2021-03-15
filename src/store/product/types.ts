export const ACTIONS = {
  GET_PRODUCTS: 'products/get_products',
  SET_LOADING: 'products/set_loading',
};

export interface ProductType {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface Product {
  products: ProductType[] | [];
  loading: boolean;
}

interface GetAllProducts {
  type: typeof ACTIONS.GET_PRODUCTS;
  payload: Array<string | number>;
}

interface SetLoading {
  type: typeof ACTIONS.SET_LOADING;
  payload: Array<string | number>;
}

export type ProductActionTypes = GetAllProducts | SetLoading;
