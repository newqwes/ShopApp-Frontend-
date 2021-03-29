import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'http://localhost:8085/',
});

export const getProduct = async () => {
  const result = await instance.get('product');

  return result.data;
};

export const getOneProduct = async id => {
  const result = await instance.get(`product/${id}`);

  return result.data;
};

export const getUsers = async () => {
  const result = await instance.get('users');

  return result.data;
};
