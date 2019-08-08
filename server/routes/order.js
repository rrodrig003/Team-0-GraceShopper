const router = require('express').Router();
const Order = require('../database/models/order');

module.exports = router;

router.post('/create', (req, res) => {
  const { sessionId } = req.body;
  Order.findOrCreate({
    where: {
      status: 'Cart',
      sessionId,
    },
  });
});
