import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import Home from './Home';
import Products from './Products';
import { connect } from 'react-redux';
import { fetchProducts } from './redux/store'

class Main extends Component {

  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <div>
        {/* NAVBAR */}
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
          </Switch>
        </main>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: function() {
      dispatch(fetchProducts())
    }
  }
}

const stateComponent = connect(null, mapDispatchToProps)

const connectedMain = stateComponent(Main)

export default connectedMain;
