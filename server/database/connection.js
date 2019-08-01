const Sequelize = require('sequelize');

const DB_NAME = process.env.DB_NAME || 'gshopper';
const DB_ADDRESS = process.env.DB_ADDRESS || 'localhost:5432';

const CONNECTION = process.env.DATABASE_URL || `postgres://${DB_ADDRESS}/${DB_NAME}`;

const db = new Sequelize(CONNECTION, {
  logging: false,
  define: {
    freezeTableName: true,
  },
});

module.exports = db;
