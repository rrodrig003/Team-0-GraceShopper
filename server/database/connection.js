const Sequelize = require('sequelize');

const DB_NAME = process.env.DB_NAME || 'boiler';

const CONNECTION_URI = `postgres://eszwajkowski@localhost:5432/${DB_NAME}`;

const db = new Sequelize(CONNECTION_URI, {
  logging: false,
});

module.exports = db;
