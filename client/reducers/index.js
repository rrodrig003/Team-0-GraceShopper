import { combineReducers } from 'redux';
import products from './products';
import category from './category';
import authenticate from './auth';

const reducer = combineReducers({
  authenticate,
  products,
  category,
});

export default reducer;
