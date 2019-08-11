import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar from '../containers/NavbarContainer';
import Home from './Home';
import Products from '../containers/ProductsContainer';
import Login from '../containers/AuthContainer';
import Cart from '../containers/CartContainer';
import SingleProduct from '../containers/SingleProductContainer';
import '../stylesheets/index.scss';
import '../stylesheets/header.scss';

const propTypes = {
  onLoad: PropTypes.func.isRequired,
};

export default class Main extends Component {
  componentDidMount() {
    const { onLoad } = this.props;
    onLoad();
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
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    );
  }
}

Main.propTypes = propTypes;
