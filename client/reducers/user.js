import { FETCH_USER_ORDERS, FETCH_PRODUCTS_FOR_ORDERS, FETCH_USER } from '../actions/actionTypes';

const userState = {
  user: null,
  products: [],
  orders: [],
  orderItems: [],
};
// TODO add user functionality
const user = (state = userState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, user: action.user };
    case FETCH_USER_ORDERS:
      return { ...state, orders: action.orders };

    case FETCH_PRODUCTS_FOR_ORDERS:
      return { ...state, products: action.products, orderItems: action.orderItems };
    default:
      return state;
  }
};

export default user;
