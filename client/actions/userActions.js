import axios from 'axios';
import * as types from './actionTypes';

const getUser = user => ({ type: types.FETCH_USER, user });

const getUserOrders = orders => ({ type: types.FETCH_USER_ORDERS, orders });

const getProductsForOrders = ({ products, orderItems }) => ({
  type: types.FETCH_PRODUCTS_FOR_ORDERS,
  products,
  orderItems,
});

// eslint-disable-next-line arrow-parens
export const fetchUser = id => dispatch => {
  axios
    .get(`/api/user/${id}`)
    .then(({ data }) => dispatch(getUser(data)))
    .catch(e => console.error('error in fetchUser Thunk', e));
};

// eslint-disable-next-line arrow-parens
export const fetchUserOrders = id => dispatch => {
  axios
    .get(`/api/user/${id}/orders`)
    .then(({ data }) => dispatch(getUserOrders(data)))
    .catch(e => console.error('error in fetchUserById Thunk', e));
};

// eslint-disable-next-line arrow-parens
export const fetchProductsForOrder = id => dispatch => {
  axios
    .get(`/api/order/${id}`)
    .then(({ data }) => dispatch(getProductsForOrders(data)))
    .catch(e => console.error('error in fetchOrderById Thunk', e));
};
