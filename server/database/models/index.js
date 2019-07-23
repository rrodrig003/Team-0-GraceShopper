const User = require("./user");
const connection = require("../connection");
const Session = require("./session");
const Product = require("./products");

Session.hasOne(User);
User.belongsTo(Session);

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
  Product
};
