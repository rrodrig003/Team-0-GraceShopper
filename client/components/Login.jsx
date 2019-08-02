import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

const Login = ({ handleChange, handleSignIn, fields }) => (
  <div>
    <Input
      handleChange={handleChange}
      fields={fields}
    />
    <Button
      handleClick={handleSignIn}
      name="Sign In"
    />
  </div>
);

Login.propTypes = propTypes;

export default Login;
