import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

let middleware = [];
if (process.env.NODE_ENV === 'development') middleware = [thunkMiddleware, logger];
else middleware = [thunkMiddleware];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
