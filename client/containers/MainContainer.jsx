import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { sessionOnLoad } from '../actions/sessionActions';
import Main from '../components/Main';
import { fetchCartBySession, fetchCartByUser } from '../actions/cartActions';

const Container = props => <Main {...props} />;

const mapStateToProps = (state) => {
  const { authenticate } = state;
  return {
    authenticate: authenticate.auth,
    signedIn: authenticate.auth.signedIn,
    userId: authenticate.auth.user.id,
    sessionId: authenticate.auth.session.id,
  };
};

const mapDispatchToProps = dispatch => ({
  getProducts() {
    dispatch(fetchProducts());
  },
  onLoad() {
    dispatch(sessionOnLoad());
  },
  getCartByUser: id => dispatch(fetchCartByUser(id)),
  getCartBySession: id => dispatch(fetchCartBySession(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
