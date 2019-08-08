import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/products.scss';

// TODO resolve linting errors
// Include prop types
const propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    updatedAt: PropTypes.string,
    createdAt: PropTypes.string,
  })).isRequired,
  getSingleProd: PropTypes.func.isRequired,
};

const Products = ({ products, getSingleProd }) => (
  <div className="products-grid">
    {products.map(product => (
      <Link to={`/products/${product.id}`} key={product.id}>
        <div
          className="product"
          role="button"
          tabIndex={0}
          onClick={() => {}}
          onKeyDown={getSingleProd(product.id)}
        >
          <img
            src={product.imageUrl}
            alt={product.description}
          />
          <div className="product-name">{product.name}</div>
          <div>{product.price}</div>
          <button type="button">ADD TO CART!</button>
        </div>
      </Link>
    ))}
  </div>
);

Products.propTypes = propTypes;

export default Products;
