import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const Button = ({ handleClick, name }) => (
  <div>
    <button type="button" onClick={handleClick}>{name}</button>
  </div>
);

Button.propTypes = propTypes;

export default Button;
