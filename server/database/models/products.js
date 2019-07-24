const Sequelize = require("sequelize");
const connection = require("../connection");

const Product = connection.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 1000
  },
  description: {
    type: Sequelize.TEXT
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  rating: {
    type: Sequelize.INTEGER
  }
});

module.exports = Product;
