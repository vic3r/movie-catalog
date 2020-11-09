import { userConstants } from '../_constants';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export const authentication = (action, state = initialState) => {
  switch (action) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggedIn: true,
        user: user.action,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
};
