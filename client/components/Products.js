import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../stylesheets/products.scss';
import { fetchSingleProduct } from './redux/store';
import SingleProduct from './SingleProduct';

class Products extends Component {
  render() {
    const { products, getSingleProd } = this.props;
    return (
      <div className="products-grid">
        {products.map(product => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="product" onClick={() => getSingleProd(product.id)}>
              <img src={product.imageUrl} />
              <div className="product-name">{product.name}</div>
              <div>{product.price}</div>
              <button type="button">ADD TO CART!</button>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSingleProd: id => dispatch(fetchSingleProduct(id)),
});

const mapStateToProps = state => ({
  products: state.products.products,
});

const stateComponent = connect(mapStateToProps, mapDispatchToProps);

const connectedProducts = stateComponent(Products);

export default connectedProducts;
