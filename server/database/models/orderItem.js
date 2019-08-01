const { INTEGER } = require('sequelize');
const db = require('../connection.js');

const OrderItem = db.define('orderItem', {
  quantity: {
    type: INTEGER,
    defaultValue: 1,
  },
});

module.exports = OrderItem;
