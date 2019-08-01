const connection = require('../connection');
const User = require('./user');
const Product = require('./product');
const Category = require('./category');
const Session = require('./session');
const Order = require('./order');
const OrderItem = require('./orderItem');
const Rating = require('./rating');


// associations
Session.belongsTo(User);
User.hasMany(Session);
Product.belongsToMany(Order, { through: OrderItem });
Order.belongsToMany(Product, { through: OrderItem });
Order.belongsTo(Session);
Order.belongsTo(User);
User.hasMany(Order);
Session.hasMany(Order);
Product.belongsTo(Category);
Category.hasMany(Product);
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
