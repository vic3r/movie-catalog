import { login as loginApi, register as registerApi } from '../utils/apis/movie-api';

const login = async (username, password) => {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  return loginApi(formData)
    .then((response) => {
      const user = { username };
      localStorage.setItem('user', JSON.stringify(user));
      console.log(response.data.token);
      localStorage.setItem('token', response.data.token);
      return user;
    })
    .catch((err) => err);
};

const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

const register = async (email, firstName, lastName, username, password) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('username', username);
  formData.append('first_name', firstName);
  formData.append('last_name', lastName);
  formData.append('password', password);
  return registerApi(formData)
    .then((response) => response)
    .catch((err) => err);
};

export const userService = {
  login,
  logout,
  register,
};
