const router = require('express').Router();
const Order = require('../database/models/order.js');
const OrderItem = require('../database/models/orderItem.js');

router.get('/:id', async (req, res) => {
  try {
    const userOrder = {};
    if (req.loggedIn) userOrder.userId = req.params.id;
    else userOrder.sessionId = req.params.id;
    const order = await Order.findOne({ where: userOrder });
    const cart = await OrderItem.findAll({ where: { orderId: order.id } });
    res.json(cart);
  } catch (e) {
    res.status(500).send({
      error: e.errors,
    });
  }
});

router.post('/add', (req, res, next) => {
  const { orderId, productId, quantity } = req.body;
  OrderItem.create({
    orderId,
    productId,
    quantity,
  })
    .then(item => res.json(item))
    .catch(next);
});

router.put('/:orderId/:productId', (req, res) => {
  const { quantity } = req.body;
  OrderItem.findOne({
    where: {
      orderId: req.params.orderId,
      productId: req.params.productId,
    },
  })
    .then((item) => {
      if (!item) throw new Error('Unable to update cart');
      return item.update({
        quantity,
      });
    })
    .then(result => res.json(result))
    .catch((e) => {
      res.status(500).send({
        error: e.message,
      });
    });
});

router.delete('/', (req, res) => {
  const { orderId, productId } = req.body;
  OrderItem.findOne({
    where: {
      orderId,
      productId,
    },
  })
    .then((item) => {
      if (!item) throw new Error('Unable to remove item');
      return item.destroy();
    })
    .then(result => res.json(result))
    .catch((e) => {
      res.status(400).send({
        error: e.message,
      });
    });
});

module.exports = router;
