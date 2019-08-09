import { GET_CART, SET_CART_PRODUCTS } from '../actions/actionTypes';

const initialCart = {
  orderItems: [],
  cartProducts: [],
};

const cart = (state = initialCart, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        orderItems: [...state.orderItems, ...action.cart],
      };
    case SET_CART_PRODUCTS:
      return {
        ...state,
        cartProducts: [...state.cartProducts, ...action.cartProducts],
      };
    default:
      return state;
  }
};

export default cart;
