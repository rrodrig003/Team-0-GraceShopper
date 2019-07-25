const db = require('../connection.js');
const { INTEGER } = require('sequelize');

const OrderItem = db.define('orderItem', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: {
    type: INTEGER,
    defaultValue: 1
  },
});

module.exports = OrderItem;
