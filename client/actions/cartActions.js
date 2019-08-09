import axios from 'axios';
import { GET_CART } from './actionTypes';

export const getCart = cartItems => ({ type: GET_CART, cartItems });

export const getUserCart = () => async (dispatch) => {
  try {
    const cart = await axios.get('/api/cart');
    dispatch(getCart(cart));
  } catch (e) {
    console.error(e);
  }
};
