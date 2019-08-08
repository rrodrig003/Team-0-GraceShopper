import { combineReducers } from 'redux';
import products from './products';
import category from './category';
import authenticate from './auth';
import cart from './cart';

const reducer = combineReducers({
  authenticate,
  products,
  category,
  cart,
});

export default reducer;
