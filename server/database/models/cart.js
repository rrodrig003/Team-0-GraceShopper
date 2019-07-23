const Sequelize = require("sequelize");
const db = require("../connection");

const Cart = db.define("cart", {});

module.exports = Cart;
