import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

const Container = props => <Navbar {...props} />;

export default connect(null)(Container);
