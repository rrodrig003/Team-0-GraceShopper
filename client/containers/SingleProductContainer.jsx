import React from 'react';
import { connect } from 'react-redux';
import SingleProduct from '../components/SingleProduct';


const Container = props => <SingleProduct {...props} />;

const mapStateToProps = (state) => {
  const { products } = state;
  return {
    product: products.singleProduct,
  };
};

export default connect(mapStateToProps)(Container);
