const Sequelize = require("sequelize");
const db = require("../connection");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  rating: {
    type: Sequelize.INTEGER
  }
});

module.exports = Product;

