import { GET_CART } from '../actions/actionTypes';

const cartState = [];

const cart = (state = cartState, action) => {
  switch (action.type) {
    case GET_CART:
      return [...state, ...action.cartItems];
    default:
      return state;
  }
};

export default cart;
