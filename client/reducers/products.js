import * as types from '../actions/actionTypes';

const productState = {
  products: [],
  singleProduct: {},
};

const productReducer = (state = productState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return { ...state, products: [...state.products, ...action.products] };
    case types.GET_SINGLE_PRODUCT:
      return { ...state, singleProduct: action.product };
    default:
      return state;
  }
};

export default productReducer;
