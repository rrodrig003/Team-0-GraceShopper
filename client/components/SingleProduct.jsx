import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/singleProduct.scss';

// TODO: Resolve eslint errors
const propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

const SingleProduct = ({ product }) => (
  <div className="single-product-container">
    <div className="single-product">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <h3>{product.price}</h3>
      <button type="button">ADD TO CART!</button>
    </div>
  </div>
);

SingleProduct.propTypes = propTypes;

export default SingleProduct;
