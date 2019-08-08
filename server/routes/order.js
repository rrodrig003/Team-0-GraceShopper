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
  })
    .then(([order]) => res.status(201).json(order))
    .catch(() => {
      res.status(500).send({
        error: 'Invalid Request',
      });
    });
});
