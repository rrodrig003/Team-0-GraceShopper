import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/login.scss';

const propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const Button = ({ handleClick, name }) => (
  <div>
    <button className="button" type="button" onClick={handleClick}>
      {name}
    </button>
  </div>
);

Button.propTypes = propTypes;

export default Button;
