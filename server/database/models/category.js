const { STRING, TEXT } = require('sequelize');
const db = require('../connection.js');

const Category = db.define('category', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: TEXT,
  },
});

module.exports = Category;
