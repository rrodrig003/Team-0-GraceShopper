const Sequelize = require("sequelize");
const db = require("../connection");

const CartItems = db.define("cartitems", {});

module.exports = CartItems;
