import React from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category';

const Container = props => (<Category {...props} />);

const mapStateToProps = (state) => {
  const { category } = state;
  return {
    categories: category.categories,
  };
};

export default connect(mapStateToProps)(Container);
