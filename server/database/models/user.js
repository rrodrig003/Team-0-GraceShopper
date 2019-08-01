/* eslint-disable max-len */
const { STRING, BOOLEAN, INTEGER } = require('sequelize');
const bcrypt = require('bcrypt');
const connection = require('../connection');

const User = connection.define('user', {
  username: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  firstName: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  // TODO: validation for location
  country: {
    type: STRING,
  },
  state: {
    type: STRING,
  },
  city: {
    type: STRING,
  },
  postalCode: {
    type: INTEGER,
  },
  street: {
    type: STRING,
  },
  isAdmin: {
    type: BOOLEAN,
    defaultValue: false,
  },
}, {
  hooks: {
    async beforeCreate(user) {
      try {
        const salt = await bcrypt.genSalt(12);
        user.password = await bcrypt.hash(user.password, salt); // eslint-disable-line no-param-reassign
      } catch (e) {
        throw new Error(e);
      }
    },
  },
});

module.exports = User;
