import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../stylesheets/singleProduct.scss';

class SingleProduct extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="single-product-container">
        <div className="single-product">
          <h1>{product.name}</h1>
          <img src={product.imageUrl} />
          <p>{product.description}</p>
          <h3>{product.price}</h3>
          <button type="button">ADD TO CART!</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.products.singleProduct,
});

const stateComponent = connect(mapStateToProps);

const connectedSingleProduct = stateComponent(SingleProduct);

export default connectedSingleProduct;
