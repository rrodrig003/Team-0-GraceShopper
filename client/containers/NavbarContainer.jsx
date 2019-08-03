import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { logoutUser, sessionOnLoad } from '../actions/sessionActions';

const Container = props => <Navbar {...props} />;

const mapStateToProps = (state) => {
  const { authenticate } = state;
  return {
    user: authenticate.user,
    signedIn: authenticate.signedIn,
  };
};

const mapDispatchToProps = dispatch => ({
  async handleLogout(e) {
    e.preventDefault();
    await dispatch(logoutUser()).catch(err => console.error(err));
    dispatch(sessionOnLoad());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
