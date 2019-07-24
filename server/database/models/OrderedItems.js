const db = require('../connection.js')
const { INTEGER } = require('sequelize')

const OrderedItems = db.define('orderedItems', {
  quantity: {
    type: INTEGER
  }
})

// no additional fields required; will be added via associations

module.exports = OrderedItems