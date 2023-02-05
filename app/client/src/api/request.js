import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/user',
});

export const getAllUsers = async () => {
  const { data } = await api.get();
  return data;
};

export const getUserById = async (id) => {
  const { data } = await api.get(`/${id}`);
  return data;
};

export const deleteUser = async (id) => {
  const { data } = await api.delete(id);
  return data;
};

export const postUser = async (body) => {
  const { data } = await api.post('/', body);
  return data;
};

export const editUser = async (id, body) => {
  const { data } = await api.put(id, body);
  return data;
};
