const connection = require("../connection");
const User = require("./user");
const Products = require("./products");
const Session = require("./session");
const Orders = require("./Orders.js");
const OrderedItems = require("./OrderedItems.js");
const Cart = require("./cart.js");
const CartItems = require("./cartItems.js");

// associations
Session.belongsTo(User);
User.hasMany(Session);
// User.belongsTo(Session);

//ORDER ASSOCIATIONS
Orders.belongsTo(User);
User.hasMany(Orders);

OrderedItems.belongsTo(Orders);
Orders.hasMany(OrderedItems);

OrderedItems.belongsTo(Products);
Products.hasMany(OrderedItems);

//CART ASSOCIATIONS
Cart.belongsTo(User);
User.hasOne(Cart);

Cart.belongsTo(Session);
Session.hasOne(Cart);

//CARTITEMS ASSOCIATIONS
CartItems.belongsTo(Products);
Products.hasMany(CartItems);

CartItems.belongsTo(Cart);
Cart.hasMany(CartItems);
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
  OrderedItems,
  Products,
  Cart,
  CartItems
};
