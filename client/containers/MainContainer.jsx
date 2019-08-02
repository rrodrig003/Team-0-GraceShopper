import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import Main from '../components/Main';

const Container = props => <Main {...props} />;

const mapDispatchToProps = dispatch => ({
  getProducts() {
    dispatch(fetchProducts());
  },
});

export default connect(null, mapDispatchToProps)(Container);
