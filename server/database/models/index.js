const User = require('./user');
const connection = require('../connection');
const Session = require('./session');
const Orders = require('./Orders.js')
const OrderedItems = require('./OrderedItems.js')

// associations

User.belongsTo(Session);
Session.hasMany(User);

Orders.hasMany(User)
// Orders.belongsTo(User);



/* 
Associations:
User/Orders 
User/Cart 
Orders/PurchasedItems 
Products/Cart Items
Cart / Cart Items
*/

module.exports = {
  connection,
  User,
  Session,
  Orders,
  OrderedItems
};
