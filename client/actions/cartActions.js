import axios from 'axios';
import { GET_CART } from './actionTypes';

export const getCart = cartItems => ({ type: GET_CART, cartItems });

// eslint-disable-next-line arrow-parens
export const fetchCartBySession = id => dispatch => {
  axios.get(`/api/cart/session/${id}`)
    .then(({ data }) => {
      console.log('#### DATA IN THUNK ###', data);
      dispatch(getCart(data));
    })
    // eslint-disable-next-line no-console
    .catch(e => console.error('ERROR IN FETCH_CART BY SESSION THUNK', e));
};

// eslint-disable-next-line arrow-parens
export const fetchCartByUser = id => dispatch => {
  axios.get(`/api/cart/user/${id}`)
    .then(({ data }) => dispatch(getCart(data)))
    // eslint-disable-next-line no-console
    .catch(e => console.error('ERROR IN FETCH_CART BY USER THUNK', e));
};
