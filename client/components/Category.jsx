import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

const Category = ({ categories }) => (
  <div>
    <div>PRODUCT CATEGORY MENU...</div>
    <ul>
      {
        categories.map(category => (
          <div key={category.div}>{category.name}</div>
        ))
      }
    </ul>
  </div>
);

Category.propTypes = propTypes;

export default Category;
