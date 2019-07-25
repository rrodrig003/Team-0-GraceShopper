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
Session.belongsToMany(Product, {through: OrderItem});
Product.belongsToMany(Session, {through: OrderItem});
OrderItem.belongsTo(Order);
Order.belongsTo(User);
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
