import React from 'react';
import '../stylesheets/singleProduct.scss';

// TODO: Resolve eslint errors

const SingleProduct = ({ product }) => (
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

export default SingleProduct;
