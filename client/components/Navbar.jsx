import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  signedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

// eslint-disable-next-line consistent-return
const display = (signin) => {
  if (signin) {
    return (
      <li className="nav-link">
        <Link className="link" to="/">
      Profile
        </Link>
      </li>
    );
  }
};

const Navbar = ({ signedIn, handleLogout, isAdmin }) => (
  <nav className="nav">
    <ul>
      <li className="nav-link">
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-link">
        <Link className="link" to="/products">
          Products
        </Link>
      </li>
      <li className="nav-link">
        <Link className="link" to="/cart">
        Cart
        </Link>
      </li>

      {signedIn ? (
        <li className="nav-link">
          <Link className="link" to="/" onClick={handleLogout}>
          Logout
          </Link>
        </li>
      ) : (
        <li className="nav-link">
          <Link className="link" to="/login">
          Login
          </Link>
        </li>
      )}
      {display(signedIn)}
      {signedIn && isAdmin ? (
        <li className="nav-link">
          <Link className="link" to="/admin">
          Admin
          </Link>
        </li>
      ) : (
        ''
      )}
    </ul>
  </nav>
);

Navbar.propTypes = propTypes;

export default Navbar;
