import axios from 'axios';
import * as types from './actionTypes';

const getProducts = products => ({ type: types.GET_PRODUCTS, products });
const getSingleProduct = product => ({ type: types.GET_SINGLE_PRODUCT, product });

export const fetchSingleProduct = id => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(getSingleProduct(data));
  } catch (e) {
    console.error(e);
  }
};

export const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/products');
    dispatch(getProducts(data));
  } catch (e) {
    console.error(e);
  }
};
