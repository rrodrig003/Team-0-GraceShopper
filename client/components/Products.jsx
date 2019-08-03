import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/products.scss';

// TODO resolve linting errors
// Include prop types

const Products = ({ products, getSingleProd }) => (
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

export default Products;
