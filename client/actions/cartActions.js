import axios from 'axios';
import * as types from './actionTypes';

export const updateItem = item => ({ type: types.UPDATE_CART, item });

export const setCartProducts = cartProducts => ({ type: types.SET_CART_PRODUCTS, cartProducts });

export const addItem = item => ({ type: types.ADD_TO_CART, item });

export const removeItem = item => ({ type: types.REMOVE_CART_ITEM, item });

export const addItemToCart = (product, orderId) => async (dispatch) => {
  try {
    const newCartItem = await axios.post('/api/cart', { productId: product.id, orderId });
    dispatch(addItem(newCartItem(newCartItem)));
  } catch (e) {
    console.error(e);
  }
};

export const removeItemFromCart = cartItem => async (dispatch) => {
  try {
    await axios.delete('/api/cart', { orderId: cartItem.orderId });
    dispatch(removeItem(cartItem));
  } catch (e) {
    console.error(e);
  }
};

export const updateCartItem = (cartItem, updateType) => async (dispatch) => {
  try {
    const update = {};
    let currentQuantity = cartItem.quantity;
    if (updateType === 'decrease') {
      if (currentQuantity < 1) dispatch(removeItemFromCart(cartItem));
      else {
        update.quantity = currentQuantity;
        const decreaseQuantity = await axios.put(`/api/cart/${cartItem.orderId}/${cartItem.productId}`, update);
        dispatch(updateItem(decreaseQuantity));
      }
    } else {
      currentQuantity = cartItem.quantity + 1;
      update.quantity = currentQuantity;
      const updatedItem = await axios.put(`/api/cart/${cartItem.orderId}/${cartItem.productId}`, update);
      dispatch(updateItem(updatedItem));
    }
  } catch (e) {
    console.error(e);
  }
};
