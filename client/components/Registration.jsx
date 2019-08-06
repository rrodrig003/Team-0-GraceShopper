import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';

const propTypes = {
  handleRegister: PropTypes.func.isRequired,
  registrationInput: PropTypes.func.isRequired,
  registrationFields: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

const Registration = ({ handleRegister, registrationInput, registrationFields }) => (
  <div>
    <Input
      fields={registrationFields}
      handleChange={registrationInput}
    />
    <Button
      handleClick={handleRegister}
      name="Register"
    />
  </div>
);

Registration.propTypes = propTypes;

export default Registration;
