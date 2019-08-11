import { combineReducers } from 'redux';
import products from './products';
import category from './category';
import authenticate from './auth';
import cart from './cart';
import user from './user';

const reducer = combineReducers({
  authenticate,
  products,
  category,
  cart,
  user,
});

export default reducer;
