const Sequelize = require("sequelize");
const db = require("../connection");

const CartItems = db.define("cartitems", {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
});

module.exports = CartItems;
