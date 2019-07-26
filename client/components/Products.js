import React, { Component } from 'react'
import { connect } from 'react-redux'

class Products extends Component {
  
  render() {
    const { products } = this.props
    return (
      <div>
        {
          products.map(product => {
            return (
              <div key={product.id}>{product.name}</div>
            )
          })
        }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    products: state.products.products
  }
}

const stateComponent = connect(mapStateToProps)

const connectedProducts = stateComponent(Products);

export default connectedProducts;
