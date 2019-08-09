import { createSelector } from 'reselect';

export const getCartOrderItems = state => state.cart;

export const getAllProducts = state => state.products.allProducts;

export const getCartProducts = createSelector(
  getCartOrderItems,
  getAllProducts,
  (cart, products) => {
    const details = cart.orderItems.map((orderItem) => {
      const item = products.find(product => product.id === orderItem.productId);
      item.quantity = orderItem.quantity;
      item.price = parseFloat(item.price);
      item.orderId = orderItem.orderId;
      item.productId = orderItem.productId;
      return item;
    });
    return details;
  },
);
