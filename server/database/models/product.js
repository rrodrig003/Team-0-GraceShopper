const {STRING, DECIMAL, TEXT, INTEGER} = require("sequelize");
const connection = require("../connection");

const Product = connection.define("product", {
  name: {
    type: STRING,
    allowNull: false
  },
  price: {
    type: DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0.00,
      max: Math.floor(Number.MAX_SAFE_INTEGER),
    }
  },
  description: {
    type: TEXT
  },
  stock: {
    type: INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
      max: Math.floor(Number.MAX_SAFE_INTEGER)
    }
  },
});

module.exports = Product;
