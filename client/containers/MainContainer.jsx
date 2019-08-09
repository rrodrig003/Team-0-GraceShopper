import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { sessionOnLoad } from '../actions/sessionActions';
import { getCartProducts } from '../actions/cartActions';
import Main from '../components/Main';

const Container = props => <Main {...props} />;

const mapStateToProps = (state) => {
  const { authenticate } = state;
  return {
    authenticate: authenticate.auth,
  };
};

const mapDispatchToProps = dispatch => ({
  async onLoad() {
    await dispatch(sessionOnLoad());
    dispatch(fetchProducts());
  },
  getCartProducts() {
    dispatch(getCartProducts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
