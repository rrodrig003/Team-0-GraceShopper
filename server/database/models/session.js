const { STRING } = require('sequelize');
const connection = require('../connection');

const Session = connection.define('session', {
  SID: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Session;
