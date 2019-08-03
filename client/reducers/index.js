import { combineReducers } from 'redux';
import products from './products';
import category from './category';

const reducer = combineReducers({
  products,
  category,
});

export default reducer;
