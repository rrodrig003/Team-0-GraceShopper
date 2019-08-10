import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';
import Register from './Registration';
import '../stylesheets/login.scss';

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
  loginFields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleRegisterInput: PropTypes.func.isRequired,
  handleRegistration: PropTypes.func.isRequired,
  registrationFields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const Login = ({
  handleChange,
  handleSignIn,
  handleRegisterInput,
  handleRegistration,
  loginFields,
  registrationFields,
}) => (
  // highest level of form
  <div className="grad">
    <h2 className="h2">Login here</h2>

    <div>
      <Input handleChange={handleChange} fields={loginFields} />
      <div className="buttondiv">
        <Button classname="button" handleClick={handleSignIn} name="Sign In" />
      </div>
      <Register
        registrationFields={registrationFields}
        handleRegister={handleRegistration}
        registrationInput={handleRegisterInput}
      />
    </div>

    <div />
  </div>
);

Login.propTypes = propTypes;

export default Login;
