const router = require('express').Router();
const Order = require('../database/models/order.js');
const OrderItem = require('../database/models/orderItem.js');

router.get('/session/:sessionId', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        sessionId: req.params.sessionId,
      },
    });
    const orders = await OrderItem.findAll({
      where: {
        orderId: order.id,
      },
    });
    res.json(orders);
  } catch (e) {
    next(e);
  }
});

router.get('/order/:orderId', async (req, res, next) => {
  try {
    const order = await OrderItem.findAll({
      where: {
        orderId: req.params.orderId,
      },
    });
    res.send(order);
  } catch (e) {
    next(e);
  }
});

// get route by UserId
router.get('/user/:userId', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.params.userId,
        status: 'Cart',
      },
    });

    const orders = await OrderItem.findAll({
      where: {
        orderId: order.id,
      },
    });
    res.send(orders);
  } catch (e) {
    next(e);
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
