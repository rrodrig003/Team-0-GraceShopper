import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { sessionOnLoad } from '../actions/sessionActions';
import Main from '../components/Main';

const Container = props => <Main {...props} />;

const mapStateToProps = (state) => {
  const { authenticate } = state;
  return {
    authenticate,
  };
};

const mapDispatchToProps = dispatch => ({
  getProducts() {
    dispatch(fetchProducts());
  },
  onLoad() {
    dispatch(sessionOnLoad());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
