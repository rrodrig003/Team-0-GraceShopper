const Sequelize = require('sequelize');

const DB_NAME = process.env.DB_NAME || 'gshopper';
const DB_ADDRESS = process.env.DB_ADDRESS || 'localhost:5432';

const CONNECTION = `postgres://${DB_ADDRESS}/${DB_NAME}`;

const db = new Sequelize(CONNECTION, {
  logging: false,
});

module.exports = db;
