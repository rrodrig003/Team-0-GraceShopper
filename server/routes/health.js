const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'I am healthy.' });
});

module.exports = { router, routePath: '/health' };
