import React from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { fetchCartBySession, fetchCartByUser } from '../actions/cartActions';

const Container = props => <Cart {...props} />;

const mapStateToProps = state => ({
  signedIn: state.authenticate.signedIn,
  userId: state.authenticate.user.userId,
  sessionId: state.authenticate.session.sessionId,
  products: state.products.allProducts,
});

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
