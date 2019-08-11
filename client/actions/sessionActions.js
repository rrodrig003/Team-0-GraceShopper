import axios from 'axios';
import * as types from './actionTypes';

export const getOrCreateSession = session => ({ type: types.GET_OR_CREATE_SESSION, session });

export const inputUsername = username => ({ type: types.INPUT_USERNAME, username });

export const inputPassword = password => ({ type: types.INPUT_PASSWORD, password });

export const loginSuccessful = user => ({ type: types.LOGIN_SUCCESSFUL, user });

export const loginFailed = () => ({ type: types.LOGIN_FAILED });

export const logout = () => ({ type: types.LOGOUT_USER });

export const setUser = user => ({ type: types.SET_USER, user });

export const activeSession = () => ({ type: types.ACTIVE_SESSION });

export const updateSession = session => ({ type: types.UPDATE_SESSION, session });

export const registerUser = form => ({ type: types.REGISTER_USER, form });

export const registerSuccess = () => ({ type: types.SUCCESSFUL_REGISTER });

export const registerFailed = error => ({ type: types.FAILED_REGISTER, error });

export const getCart = cart => ({ type: types.GET_CART, cart });

export const registrationInput = (field, value) => (
  { type: types.REGISTRATION_INPUT, field, value });

export const loginAttempt = history => async (dispatch, getState) => {
  const { authenticate } = getState();
  const { username, password, session } = authenticate.auth;

  try {
    const user = await axios.post('/api/auth/login', {
      username,
      password,
    });
    dispatch(loginSuccessful(user.data));
    const sessionUser = await axios.put(`/api/auth/session/${user.data.id}`, {
      userId: user.data.id,
      sessionId: session.id,
    });
    dispatch(updateSession(sessionUser.data));
    const cart = await axios.get(`/api/cart/${user.data.id}`);
    dispatch(getCart(cart.data));
    history.push('/');
  } catch (e) {
    dispatch(loginFailed());
    dispatch(inputUsername(''));
    dispatch(inputPassword(''));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await axios.post('/api/auth/logout');
    dispatch(logout());
  } catch (e) {
    throw new Error(e);
  }
};

export const sessionOnLoad = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/auth/session');
    dispatch(getOrCreateSession(data));
    await axios.post('/api/order/create', { sessionId: data.id });
    if (data.userId !== null) {
      dispatch(activeSession());
      const user = await axios.get(`/api/auth/user/${data.userId}`);
      dispatch(setUser(user.data));
      const userCart = await axios.get(`/api/cart/${user.data.id}`);
      dispatch(getCart(userCart.data));
    } else {
      const sessionCart = await axios.get(`/api/cart/${data.id}`);
      if (sessionCart.data) dispatch(getCart(sessionCart.data));
    }
  } catch (e) {
    console.error(e);
  }
};

export const createUser = () => async (dispatch, getState) => {
  const { authenticate } = getState();
  const signUpFormData = authenticate.registration;
  try {
    await axios.post('/api/auth/register', signUpFormData);
    dispatch(registerSuccess());
  } catch (e) {
    console.error(e);
    dispatch(registerFailed(e.response.data.error));
  }
};
