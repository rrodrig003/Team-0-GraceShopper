import React from 'react';
import '../stylesheets/productSlider.scss';

const faker = require('faker');

const ProductSlider = () => (
  <div className="slider-container">
    <h2>FEATURED PRODUCT</h2>
    <div className="slides fade">
      <img src={faker.image.abstract()} alt={faker.commerce.productName()} />
      <h4>Description....</h4>
    </div>
  </div>
);

export default ProductSlider;
