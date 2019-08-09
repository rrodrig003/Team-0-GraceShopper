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

export const getCartProducts = products => (dispatch, getState) => {
  const { cart } = getState();
  const { orderItems } = cart;
  const cartProducts = (cartOrderItems) => {
    const details = cartOrderItems.map((orderItem) => {
      const item = products.find(product => product.id === orderItem.productId);
      item.quantity = orderItem.quantity;
      item.price = parseFloat(item.price);
      item.orderId = orderItem.orderId;
      item.productId = orderItem.productId;
      return item;
    });
    return details;
  };
  if (orderItems) {
    const productDetails = cartProducts(orderItems);
    dispatch(setCartProducts(productDetails));
  } else {
    dispatch(setCartProducts([]));
  }
};
