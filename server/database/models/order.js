const { ENUM } = require('sequelize');
const db = require('../connection.js');


const Order = db.define('order', {
  status: {
    type: ENUM,
    values: [
      'Cart',
      'Purchased',
      'Shipped',
      'Delivered',
      'Returned',
    ],
    defaultValue: 'Cart',
  },

});

module.exports = Order;
