import * as types from '../actions/actionTypes';

const categoryState = {
  categories: [],
  singleCategory: {},
  lastCreatedCategory: {},
};

const category = (state = categoryState, action) => {
  switch (action.type) {
    case types.GET_CATEGORIES:
      return { ...state, categories: [...state.categories, ...action.categories] };
    case types.GET_SINGLE_CATEGORY:
      return { ...state, singleCategory: action.category };
    case types.CREATE_CATEGORY:
      return { ...state, lastCreatedCategory: action.category };
    default:
      return state;
  }
};

export default category;
