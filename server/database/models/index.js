const connection = require("../connection");
const User = require("./user");
const Product = require("./product");
const Category = require("./category");
const Session = require("./session");
const Order = require("./Order");
const OrderItem = require("./orderItem");
const Rating = require("./rating");


// associations
Session.belongsTo(User);
User.hasMany(Session);
Product.belongsToMany(Order, {through: OrderItem});
OrderItem.belongsTo(Order);
Order.belongsTo(Session);
Session.hasMany(Order);
Order.hasMany(OrderItem);
Product.belongsTo(Category);
Category.hasOne(Product);
Rating.belongsTo(Product);
Rating.belongsTo(User);
Product.hasMany(Rating);

module.exports = {
  connection,
  User,
  Session,
  Order,
  OrderItem,
  Product,
  Category,
  Rating,
};
