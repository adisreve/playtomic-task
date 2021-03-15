import axios from 'axios';

const Service = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  timeout: 6000,
});

export default Service;
