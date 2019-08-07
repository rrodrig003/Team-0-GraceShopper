import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import {
  inputUsername,
  inputPassword,
  loginAttempt,
  registrationInput,
  createUser,
} from '../actions/sessionActions';

const Container = props => <Login {...props} />;

const mapStateToProps = (state) => {
  const { authenticate } = state;
  const { registration } = authenticate;
  const { auth } = authenticate;
  return {
    loginFields: [
      {
        id: 'username',
        name: 'username',
        type: 'text',
        value: auth.username,
      },
      {
        id: 'password',
        name: 'password',
        type: 'password',
        value: auth.password,
      },
    ],
    registrationFields: [
      {
        id: 'username',
        name: 'username',
        type: 'text',
        value: registration.username,
      },
      {
        id: 'password',
        name: 'password',
        type: 'password',
        value: registration.password,
      },
      {
        id: 'firstName',
        name: 'First Name',
        type: 'text',
        value: registration.firstName,
      },
      {
        id: 'lastName',
        name: 'Last Name',
        type: 'text',
        value: registration.lastName,
      },
      {
        id: 'email',
        name: 'E-mail',
        type: 'email',
        value: registration.email,
      },
      {
        id: 'country',
        name: 'Country',
        type: 'text',
        value: registration.country,
      },
      {
        id: 'state',
        name: 'State',
        type: 'text',
        value: registration.state,
      },
      {
        id: 'city',
        name: 'City',
        type: 'text',
        value: registration.city,
      },
      {
        id: 'postalCode',
        name: 'Zip Code',
        type: 'number',
        value: registration.postalCode,
      },
      {
        id: 'street',
        name: 'Street',
        type: 'text',
        value: registration.street,
      },
    ],
    username: authenticate.username,
    password: authenticate.password,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSignIn(e) {
    e.preventDefault();
    dispatch(loginAttempt(ownProps.history));
  },
  handleChange(e) {
    if (e.target.name === 'username') dispatch(inputUsername(e.target.value));
    if (e.target.name === 'password') dispatch(inputPassword(e.target.value));
  },
  handleRegisterInput(e) {
    dispatch(registrationInput(e.target.id, e.target.value));
  },
  handleRegistration(e) {
    e.preventDefault();
    dispatch(createUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
