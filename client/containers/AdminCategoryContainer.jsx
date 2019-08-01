import React from 'react';
import { connect } from 'react-redux';
import AdminCategory from '../components/AdminCategory';
import { postNewCategory } from '../actions/categoryActions';
import { updateProductCategory } from '../actions/productActions';

const Container = props => <AdminCategory {...props} />;

const mapStateToProps = state => {
  const { category, products } = state;
  return {
    products: products.allProducts,
    categories: category.categories,
  };
};

const mapDispatchToProps = dispatch => ({
  createCategory(ev) {
    const category = {
      name: ev.target.name.value,
      description: ev.target.description.value,
    };
    ev.target.name.value = '';
    ev.target.description.value = '';
    dispatch(postNewCategory(category));
  },
  assignCategoryToProduct(ev) {
    const categoryAndProduct = {
      category: ev.target.category.value,
      product: ev.target.product.value,
    };
    console.log(categoryAndProduct);
    dispatch(updateProductCategory(categoryAndProduct));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
