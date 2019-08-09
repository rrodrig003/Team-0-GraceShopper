import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

const Cart = ({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) => (
  <div>
    {
      cart.map(item => (
        <div className="cart" key={item.id}>
          <img src={item.imageUrl} alt={item.name} />
          <span className="item-name">{item.name}</span>
          <span className="item-quantity">{item.quantity}</span>
          <span className="item-price">{item.price}</span>
          <div className="item-actions">
            <Button onClick={increaseQuantity} name="+" />
            <Button onClick={decreaseQuantity} name="-" />
          </div>
          <span className="remove-item">
            <Button onClick={removeItem} name="x" />
          </span>
        </div>
      ))
    }
  </div>
);

Cart.propTypes = propTypes;

export default Cart;
