import React from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getCartProducts } from '../selector';
import { updateCartItem, removeItemFromCart } from '../actions/cartActions';

const Container = props => <Cart {...props} />;

const mapStateToProps = state => ({ cart: getCartProducts(state) });

const mapDispatchToProps = dispatch => ({
  handleUpdate(cartItem, updateType) {
    switch (updateType) {
      case 'increase':
        dispatch(updateCartItem(cartItem, 'increase'));
        break;
      case 'decrease':
        dispatch(updateCartItem(cartItem, 'decrease'));
        break;
      default:
        dispatch(removeItemFromCart(cartItem));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
