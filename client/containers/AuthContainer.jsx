import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { inputUsername, inputPassword, loginAttempt } from '../actions/sessionActions';

const Container = props => <Login {...props} />;

const mapStateToProps = (state) => {
  const { authenticate } = state;
  return {
    fields: [
      {
        name: 'username',
        type: 'text',
        value: authenticate.username,
      },
      {
        name: 'password',
        type: 'password',
        value: authenticate.password,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
