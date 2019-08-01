const { INTEGER } = require('sequelize');
const db = require('../connection');

const Rating = db.define('rating', {
  rating: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 5,
    },
  },
});

module.exports = Rating;
