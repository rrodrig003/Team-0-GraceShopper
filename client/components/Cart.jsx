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
  ),
  handleUpdate: PropTypes.func.isRequired,
};

const Cart = ({
  cart,
  handleUpdate,
}) => (
  <div>
    { cart.length
      ? (cart.map(item => (
        <div className="cart" key={item.name}>
          <img src={item.imageUrl} alt={item.name} />
          <span className="item-name">{item.name}</span>
          <span className="item-quantity">{item.quantity}</span>
          <span className="item-price">{item.price}</span>
          <div className="item-actions">
            <Button handleClick={() => handleUpdate(item, 'increase')} name="+" />
            <Button handleClick={() => handleUpdate(item, 'decrease')} name="-" />
          </div>
          <span className="remove-item">
            <Button handleClick={() => handleUpdate(item, 'remove')} name="x" />
          </span>
        </div>
      ))) : (<div> Empty Cart </div>)
    }
    <div>
      <Button handleClick={() => {}} name="Checkout" />
    </div>
  </div>
);

Cart.propTypes = propTypes;

Cart.defaultProps = {
  cart: [],
};

export default Cart;
