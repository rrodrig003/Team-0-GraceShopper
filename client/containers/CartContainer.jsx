import React from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { fetchCartBySession, fetchCartByUser } from '../actions/cartActions';

const Container = props => <Cart {...props} />;

const mapStateToProps = (state) => {
  const { authenticate, products, cart } = state;
  return {
    signedIn: authenticate.auth.signedIn,
    userId: authenticate.auth.user.id,
    sessionId: authenticate.auth.session.id,
    products: products.allProducts,
    cartItems: cart,
  };
};

const mapDispatchToProps = dispatch => ({
  getCartByUser: id => dispatch(fetchCartByUser(id)),
  getCartBySession: id => dispatch(fetchCartBySession(id)),
});

const connectComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const connectedCartContainer = connectComponent(Container);

export default connectedCartContainer;
