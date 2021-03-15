import Service from '../config/api';

interface HeadersData {
  [key: string]: string;
}

const headers: HeadersData = { 'Content-Type': 'application/json' };

const Product = {
  getProducts() {
    return Service.get('/products', { headers });
  },
};

export default Product;
