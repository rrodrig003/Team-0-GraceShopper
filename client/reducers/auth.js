import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes';
import registration from './registration';

const initialAuth = {
  showRegisterSuccess: false,
  displayError: {
    display: false,
    error: '',
  },
  signedIn: false,
  failedAttempt: false,
  session: {},
  user: {},
  username: '',
  password: '',
};

const auth = (state = initialAuth, action) => {
  switch (action.type) {
    case types.GET_OR_CREATE_SESSION:
      return {
        ...state,
        session: action.session,
      };
    case types.ACTIVE_SESSION:
      return {
        ...state,
        signedIn: true,
      };
    case types.INPUT_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    case types.INPUT_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case types.LOGIN_SUCCESSFUL:
      return {
        ...state,
        user: action.user,
        signedIn: true,
        failedAttempt: false,
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        failedAttempt: true,
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        signedIn: false,
        user: {},
        session: {},
      };
    case types.SUCCESSFUL_REGISTER:
      return {
        ...state,
        showRegisterSuccess: true,
      };
    case types.FAILED_REGISTER:
      return {
        ...state,
        displayError: {
          display: true,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

const authenticate = combineReducers({
  auth,
  registration,
});

export default authenticate;
