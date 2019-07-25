const connection = require('../connection');
const { STRING, BOOLEAN, INTEGER } = require('sequelize');

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
  //TODO: validation for location
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
    type: INTEGER
  },
  street: {
    type: STRING,
  },
  isAdmin: {
    type: BOOLEAN,
    defaultValue: false
  }
});

module.exports = User;
