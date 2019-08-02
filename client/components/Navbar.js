import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li className="nav-link"><Link className="link" to="/">Home</Link></li>
          <li className="nav-link"><Link className="link" to="/products">Products</Link></li>
          <li className="nav-link"><Link className="link" to="/cart">Cart</Link></li>
          <li className="nav-link"><Link className="link" to="/login">Login</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
