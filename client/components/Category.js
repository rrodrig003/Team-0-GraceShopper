import React, { Component } from 'react';
import { connect } from 'react-redux';

class Category extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <div>PRODUCT CATEGORY MENU...</div>
        <ul>
          {
            categories.map(category => (
              <div key={category.id}>{category.name}</div>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

const stateComponent = connect(mapStateToProps);

const connectedCategory = stateComponent(Category);

export default connectedCategory;
