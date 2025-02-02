import * as types from '../actions/actionTypes';

const productState = {
  allProducts: [],
  singleProduct: {},
};

const products = (state = productState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return { ...state, allProducts: [...state.allProducts, ...action.products] };
    case types.GET_SINGLE_PRODUCT:
      return { ...state, singleProduct: action.product };
    default:
      return state;
  }
};

export default products;
