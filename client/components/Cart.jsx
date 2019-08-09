import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    orderId: PropTypes.number.isRequired,
    productId: PropTypes.number.isRequired,
  })).isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    categoryId: PropTypes.number,
  })).isRequired,
  // signedIn: PropTypes.bool.isRequired,
  // // eslint-disable-next-line react/require-default-props
  // userId: PropTypes.number,
  // sessionId: PropTypes.number.isRequired,
  // getCartByUser: PropTypes.func.isRequired,
  // getCartBySession: PropTypes.func.isRequired,
};

// eslint-disable-next-line max-len
// const Cart = ({ signedIn, userId, sessionId, getCartByUser, getCartBySession, cartItems, products }) => {
const Cart = ({ cartItems, products }) => {
    // if (signedIn) {
    //   getCartByUser(userId);
    // } else {
    //   getCartBySession(sessionId);
    // }

    return (
      <div className="">
        <h1>Shopping Cart</h1>
        {
          // eslint-disable-next-line arrow-parens
          cartItems.length > 0
          ? 
          (cartItems.map(item => {
            const product = products.find(elem => elem.id === item.productId);
            return (
              <div key={item.orderId}>
                <img src={product.imageUrl} alt="" />
                <span>{product.name}</span>
                <span>{item.quantity}</span>
                <span>{product.price}</span>
                <span>{product.price * item.quantity}</span>
              </div>
            );
          }))
          :
          (
            <div>NO ITEMS IN CART AT THIS TIME</div>
          )
        }
      </div>
    );
};

// {
//   // eslint-disable-next-line arrow-parens
//   cartItems.length > 0 && cartItems.map(item => {
//     const product = products.find(elem => elem.id === item.productId);
//     return (
//       <div key={item.orderId}>
//         <img src={product.imageUrl} alt="" />
//         <span>{product.name}</span>
//         <span>{item.quantity}</span>
//         <span>{product.price}</span>
//         <span>{product.price * item.quantity}</span>
//       </div>
//     );
//   })
// }

// class Cart extends Component {

//   componentDidMount() {
//     const {
//       signedIn, userId, sessionId, getCartByUser, getCartBySession,
//     } = this.props;
//     if (signedIn) {
//       getCartByUser(userId);
//     } else {
//       getCartBySession(sessionId);
//     }
//   }

//   render() {
//     const { cartItems, products } = this.props;
    
//     const {
//       signedIn, userId, sessionId, getCartByUser, getCartBySession, cartItems, products,
//     } = this.props;
//     console.log(this.props)
//     return (
//       <div className="">
//         <h1>Shopping Cart</h1>
//         {
//           // eslint-disable-next-line arrow-parens
//           cartItems.length > 0
//           ? 
//           (cartItems.map(item => {
//             const product = products.find(elem => elem.id === item.productId);
//             return (
//               <div key={item.orderId}>
//                 <img src={product.imageUrl} alt="" />
//                 <span>{product.name}</span>
//                 <span>{item.quantity}</span>
//                 <span>{product.price}</span>
//                 <span>{product.price * item.quantity}</span>
//               </div>
//             );
//           }))
//           :
//           (
//             <div>NO ITEMS IN CART AT THIS TIME</div>
//           )
//         }
//       </div>
//     );
//   }
// };

Cart.propTypes = propTypes;

export default Cart;
