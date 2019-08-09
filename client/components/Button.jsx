import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/login.scss';

const propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  productId: PropTypes.number,
  orderId: PropTypes.number,
};

const Button = ({
  handleClick,
  name,
  productId,
  orderId,
}) => (
  <div>
    <button className="button" type="button" pid={productId} oid={orderId} onClick={handleClick}>
      {name}
    </button>
  </div>
);

Button.propTypes = propTypes;

Button.defaultProps = {
  orderId: null,
  productId: null,
};

export default Button;
