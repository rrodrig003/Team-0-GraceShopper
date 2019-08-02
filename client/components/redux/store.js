import { combineReducers, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

// ACTION CONSTANTS
const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';
const GET_CATEGORIES = 'GET_CATEGORIES';
const GET_SINGLE_CATEGORY = 'GET_SINGLE_CATEGORY';

// ACTION CREATORS
const getProducts = products => ({ type: GET_PRODUCTS, products });
const getSingleProduct = product => ({ type: GET_SINGLE_PRODUCT, product });

const getCategories = categories => ({ type: GET_CATEGORIES, categories });
const getSingleCategory = category => ({ type: GET_SINGLE_CATEGORY, category });

// STATES
const productState = {
  products: [],
  singleProduct: {},
};

const categoryState = {
  categories: [],
  singleCategory: {},
};

// REDUCERS
const productReducer = (state = productState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: [...state.products, ...action.products] };
    case GET_SINGLE_PRODUCT:
      return { ...state, singleProduct: action.product };
    default:
      return state;
  }
};

const categoryReducer = (state = categoryState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, categories: [...state.categories, ...action.categories] };
    case GET_SINGLE_CATEGORY:
      return { ...state, singleCategory: action.category };
    default:
      return state;
  }
};

export const fetchSingleCategory = id => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/categories/${id}`);
    dispatch(getSingleCategory(data));
  } catch (e) {
    console.error(e);
  }
};

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

export const fetchCategories = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/categories');
    dispatch(getCategories(data));
  } catch (e) {
    console.error(e);
  }
};

// CREATE STORE
const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));

export default store;
