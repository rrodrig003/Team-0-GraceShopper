import React from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import { fetchSingleProduct } from '../actions/productActions';

const Container = props => <Products {...props} />;

const mapStateToProps = (state) => {
  const { products } = state;
  return {
    products: products.allProducts,
  };
};

const mapDispatchToProps = dispatch => (
  {
    getSingleProd: id => dispatch(fetchSingleProduct(id)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Container);
