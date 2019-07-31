const {STRING, DECIMAL, TEXT, INTEGER} = require("sequelize");
const connection = require("../connection");
const faker = require('faker')

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
  imageUrl: {
    type: STRING,
    defaultValue: faker.image.abstract(),
    validate: {
      isUrl: true,
    }
  },
});

module.exports = Product;
