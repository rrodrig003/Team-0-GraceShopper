import { createSelector } from 'reselect';

export const getCart = state => state.cart;

export const getProducts = state => state.products.allProducts;

// export const getCartProducts = createSelector(
//   getCart,
//   getProducts,
//   (cartItems, products) => {
//     cartItems.map((cartItem) => {
//       const item = products.find(product => product.id === cartItem.productId);
//       if (cartItem.quantity) {
//         item.quantity = cartItem.quantity;
//         item.price = parseFloat(item.price);
//       }
//       if (item) return item;
//       return [{
//         name: '',
//         description: '',
//         price: 0,
//         imageUrl: '',
//         quantity: null,
//       }];
//     });
//   },
// );
export const getCartProducts = createSelector(
  getCart,
  getProducts,
  (cartItems, products) => {
    cartItems.map((cartItem) => {
      const item = products.find(product => product.id === cartItem.productId);
      if (item) {
        item.quantity = cartItem.quantity;
        item.price = parseFloat(item.price);
        return item;
      }
      return cartItems;
    });
  },
);
