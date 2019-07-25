import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Cart from "./Cart.js";
import Login from "./Login.js";
import Products from "./Products.js";
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            width: "90%",
            height: "50px",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
            color: "white"
          }}
        >
          <Link to="/home">Home</Link>

          <Link to="/products">Products</Link>

          <Link to="/cart">Cart</Link>

          <Link to="/login">Login</Link>
        </div>
        <Route path="/home/" component={Home} />
        <Route path="/products/" component={Products} />
        <Route path="/cart/" component={Cart} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default Navbar;
