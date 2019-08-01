import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import Login from './Login';
import Cart from './Cart';
import SingleProduct from './SingleProduct';
import { fetchProducts } from './redux/store';
import '../stylesheets/index.scss';
import '../stylesheets/header.scss';

class Main extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div className="main-container">
        <header>
          <h1><Link to="/">BAZAAR</Link></h1>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/products/:productId" component={SingleProduct} />
            <Redirect to="/"></Redirect>
          </Switch>
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProducts() {
    dispatch(fetchProducts());
  },
});

const stateComponent = connect(null, mapDispatchToProps);

const connectedMain = stateComponent(Main);

export default connectedMain;
