const db = require('../connection.js')

const Orders = db.define('orders', {})

// no additional fields required; will be added via associations

module.exports = Orders