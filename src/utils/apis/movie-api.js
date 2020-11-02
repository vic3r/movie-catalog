import axios from 'axios';

const host = process.env.REACT_APP_HOST || 'localhost:8000';

const register = async (data) => {
  return axios({
    method: 'POST',
    url: `${host}/auth/profile/`,
    data,
  });
};

const login = async (data) => {
  return axios({
    method: 'POST',
    url: `${host}/auth/login/`,
    data,
  });
};

const logout = () => {
  localStorage.removeItem('token');
};

const getMovies = async () => {
  return axios({
    method: 'GET',
    url: `${host}/movies/`,
    headers: { authorization: `Token ${localStorage.getItem('token')}` },
  });
};

const getPersons = async () => {
  return axios({
    method: 'GET',
    url: `${host}/persons/`,
    headers: { authorization: `Token ${localStorage.getItem('token')}` },
  });
};

export { register, login, logout, getMovies, getPersons };
