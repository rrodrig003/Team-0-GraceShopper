const { BOOLEAN, STRING } = require('sequelize');
const db = require('../connection.js');


const Order = db.define('order', {
  fulfilled: {
    type:BOOLEAN,
    defaultValue: false,
  },

});

module.exports = Order;
