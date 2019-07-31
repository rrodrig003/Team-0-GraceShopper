import { combineReducers, createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import axios from 'axios'

// ACTION CONSTANTS
const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'
const GET_CATEGORIES = 'GET_CATEGORIES'
const GET_SINGLE_CATEGORY = 'GET_SINGLE_CATEGORY'

// ACTION CREATORS
const getProducts = (products) => ({type: GET_PRODUCTS, products})
const getSingleProduct = (product) => ({type: GET_SINGLE_PRODUCT, product})

const getCategories = (categories) => ({type: GET_CATEGORIES, categories})
const getSingleCategory = (category) => ({type: GET_SINGLE_CATEGORY, category})

// STATES
const productState = {
  products: [],
  singleProduct: {}
}

const categoryState = {
  categories: [],
  singleCategory: {}
}

// REDUCERS
const productReducer = (state = productState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, products: [...state.products, ...action.products]}
    case GET_SINGLE_PRODUCT:
      // const singleProd = state.products.filter(elem => action.id === elem.id)
      return {...state, singleProduct: action.product}
    default:
      return state;
  }
}

const categoryReducer = (state = categoryState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {...state, categories: [...state.categories, ...action.categories]}
    case GET_SINGLE_CATEGORY:
      // const singleCat = state.categories.filter(elem => action.id === elem.id)
      return {...state, singleCategory: action.category}
    default:
      return state;
  }
}

// THUNKS

const axios_instance = axios.create({
  proxy: {
    host: '127.0.0.1',
    port: 3000,
  },
})

export const fetchProducts = () => (dispatch) => {
  return axios_instance.get('/api/products')
    .then(res => res.data)
    .then(products => {
      console.log(products)
      dispatch(getProducts(products))
    })
    .catch(e => console.error('***ERROR IN fetchProducts:', e))
}

export const fetchCategories = () => (dispatch) => {
  return axios_instance.get('/api/categories')
    .then(res => {
      console.log('@@@ CATEGORIES RES:', res)
      return res.data
    })
    .then(categories => {
      // console.log(categories)
      dispatch(getCategories(categories))
    })
    .catch(e => console.error('***ERROR IN fetchCategories:', e))
}

export const fetchSingleProduct = (id) => (dispatch) => {
  return axios_instance.get(`/api/products/${id}`)
    .then(res => res.data)
    .then(product => {
      dispatch(getSingleProduct(product))
    })
    .catch(e => console.error('***ERROR IN fetchSingleProduct:', e))
}

export const fetchSingleCategory = (id) => (dispatch) => {
  return axios_instance.get(`/api/categories/${id}`)
    .then(res => res.data)
    .then(( [category] ) => {
      dispatch(getSingleCategory(category))
    })
    .catch(e => console.error('***ERROR IN fetchSingleCategory:', e))
}

// CREATE STORE
const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer
})

const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware))

export default store;
