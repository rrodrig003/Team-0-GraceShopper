import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    quantity: PropTypes.number,
    orderId: PropTypes.number,
    productId: PropTypes.number,
  })).isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    productId: PropTypes.number,
    name: PropTypes.number,
    price: PropTypes.number,
    description: PropTypes.string,
    stock: PropTypes.number,
    imageUrl: PropTypes.string,
    categoryId: PropTypes.number,
  })).isRequired,
  signedIn: PropTypes.bool.isRequired,
  userId: PropTypes.number.isRequired,
  sessionId: PropTypes.number.isRequired,
  getCartByUser: PropTypes.func.isRequired,
  getCartBySession: PropTypes.func.isRequired,
};

class Cart extends Component {
  componentDidMount() {
    const {
      signedIn, userId, sessionId, getCartByUser, getCartBySession,
    } = this.props;
    if (signedIn) {
      getCartByUser(userId);
    } else {
      getCartBySession(sessionId);
    }
  }

  render() {
    const { cartItems, products } = this.props;
    return (
      <div className="">
        <h1>Shopping Cart</h1>
        {
          // eslint-disable-next-line arrow-parens
          cartItems.map(item => {
            const product = products.find(elem => elem.productId === item.productId);
            return (
              <div key={item.orderId}>
                <img src={product.imageUrl} alt="" />
                <span>{product.name}</span>
                <span>{item.quantity}</span>
                <span>{product.price}</span>
                <span>{product.price * item.quantity}</span>
              </div>
            );
          })
        }
      </div>
    );
  }
}

Cart.propTypes = propTypes;

export default Cart;
