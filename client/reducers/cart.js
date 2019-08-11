import { GET_CART } from '../actions/actionTypes';

const initialCart = {
  orderItems: [],
};

const cart = (state = initialCart, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        orderItems: [...state.orderItems, ...action.cart],
      };
    default:
      return state;
  }
};

export default cart;
