/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/adminCategory.scss';


const propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    categoryId: PropTypes.number,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    updatedAt: PropTypes.string,
    createdAt: PropTypes.string,
  })).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.stringisRequired,
    description: PropTypes.string,
  })).isRequired,
  createCategory: PropTypes.func.isRequired,
  assignCategoryToProduct: PropTypes.func.isRequired,
};

const AdminCategory = ({
  categories, products, createCategory, assignCategoryToProduct,
}) => {
  return (
    <div className="admin-cat-grid">
      <div>
        <h1>CATEGORY MANAGEMENT</h1>
        <form onSubmit={createCategory} id="newCategory">
          <h3>Enter New Category</h3>
          <input type="text" name="name" placeholder="Enter Category Name" />
          <input type="text" name="description" placeholder="Enter Description (OPTIONAL)" />
          <span>
            <button type="submit">Submit</button>
          </span>
        </form>
      </div>
      <div>
        <form onSubmit={assignCategoryToProduct} id="assignCategoryToProduct">
          <h3>Choose Category to Assign</h3>
          Categories:
          <select name="category" form="assignCategoryToProduct">
            <option value="" disabled selected>Select Category</option>
            {
              categories.map((category) => {
                return (
                  <option value={category.name}>{category.name}</option>
                );
              })
            }
          </select>

          Products:
          <select name="product" form="assignCategoryToProduct">
            <option value="" disabled selected>Select Product</option>
            {
            products.map((product) => {
              return (
                <option value={product.name}>{product.name}</option>
              );
            })
            }
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

AdminCategory.propTypes = propTypes;

export default AdminCategory;
