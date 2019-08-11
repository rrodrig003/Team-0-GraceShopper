import axios from 'axios';
import * as types from './actionTypes';

const getCategories = categories => ({ type: types.GET_CATEGORIES, categories });
const getSingleCategory = category => ({ type: types.GET_SINGLE_CATEGORY, category });
const createCategory = category => ({ type: types.CREATE_CATEGORY, category });

export const fetchSingleCategory = id => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/categories/${id}`);
    dispatch(getSingleCategory(data));
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

export const postNewCategory = (category) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/categories/create', category);
    dispatch(createCategory(data));
  } catch (e) {
    console.error('@@@ ERROR IN POST NEW CAT THUNK', e);
  }
};