import axios from 'axios';

const host = process.env.REACT_APP_HOST || 'localhost:8000';

const register = async (data) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  return axios({
    method: 'POST',
    url: `${host}/auth/profile/`,
    headers,
    data,
  });
};

const login = async (data) => {
  const headers = {
    'Content-Type': 'text/plain',
  };

  return axios({
    method: 'POST',
    url: `${host}/auth/login/`,
    headers,
    data,
  });
};

const getMovies = async () => {
  return axios({
    method: 'GET',
    url: `${host}/movies/`,
    headers: { authorization: `Token ${localStorage.getItem('token')}` },
  });
};

const getMovieByName = async (name) => {
  return axios({
    method: 'GET',
    url: `${host}/movies/?title=${name}`,
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

const addMovie = async (movieId) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const data = {
    email: user.username,
    movie_id: movieId,
  };
  return axios({
    method: 'POST',
    url: `${host}/users/movie/`,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Token ${localStorage.getItem('token')}`,
    },
    data,
  });
};

const retrieveMovies = async () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return axios({
    method: 'GET',
    url: `${host}/users/movie/?email=${user.username}`,
    headers: { authorization: `Token ${localStorage.getItem('token')}` },
  });
};

export {
  register,
  login,
  getMovies,
  getMovieByName,
  getPersons,
  addMovie,
  retrieveMovies,
};
