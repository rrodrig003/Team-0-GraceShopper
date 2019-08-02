import * as types from '../actions/actionTypes';

const initialAuth = {
  signedIn: false,
  failedAttempt: false,
  session: {},
  user: {},
  username: '',
  password: '',
};

const authenticate = (state = initialAuth, action) => {
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
    default:
      return state;
  }
};

export default authenticate;
