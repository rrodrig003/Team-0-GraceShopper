import React from 'react';
import { connect } from 'react-redux';

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

export default Category;
