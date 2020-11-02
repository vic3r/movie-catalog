import { useHistory } from 'react-router-dom';
import { userConstants } from '../_constants';
import { login as loginApi, logout as logoutApi } from '../utils/apis/movie-api';

const login = (username, password) => {
  const request = (user) => {
    return { type: userConstants.LOGIN_REQUEST, user };
  };
  const success = (user) => {
    return { type: userConstants.LOGIN_SUCCESS, user };
  };
  const failure = (error) => {
    return { type: userConstants.LOGIN_FAILURE, error };
  };

  return (dispatch) => {
    const history = useHistory();
    dispatch(request({ username }));
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    loginApi(formData).then(
      (token) => {
        dispatch(success(username));
        localStorage.setItem('token', token);
        history.push('/home');
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };
};

const logout = () => {
  logoutApi();
  return { type: userConstants.LOGOUT };
};

export const userActions = {
  login,
  logout,
};
