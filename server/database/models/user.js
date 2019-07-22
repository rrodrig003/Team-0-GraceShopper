const connection = require('../connection');
const { STRING, BOOLEAN } = require('sequelize');

//TODO: SALT/HASH PW.

const User = connection.define('user', {
  username: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  password: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  firstName: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName:{
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  isAdmin: {
    type: BOOLEAN,
    defaultValue: false
  }
});

module.exports = User;
