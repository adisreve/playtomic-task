import Service from '../config/api';

interface HeadersData {
  [key: string]: string;
}

const headers: HeadersData = { 'Content-Type': 'application/json' };

const User = {
  getUsers() {
    return Service.get('/users', { headers });
  },
};

export default User;
