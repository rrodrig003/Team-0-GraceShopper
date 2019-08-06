import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';
import Register from './Registration';

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
  loginFields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  handleRegisterInput: PropTypes.func.isRequired,
  handleRegistration: PropTypes.func.isRequired,
  registrationFields: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

const Login = ({
  handleChange,
  handleSignIn,
  handleRegisterInput,
  handleRegistration,
  loginFields,
  registrationFields,
}) => (
  <div>
    <Input
      handleChange={handleChange}
      fields={loginFields}
    />
    <Button
      handleClick={handleSignIn}
      name="Sign In"
    />
    <div>
      <Register
        registrationFields={registrationFields}
        handleRegister={handleRegistration}
        registrationInput={handleRegisterInput}
      />
    </div>
  </div>
);

Login.propTypes = propTypes;

export default Login;
