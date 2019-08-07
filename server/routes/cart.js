const router = require('express').Router();
const Order = require('../database/models/order.js');
const OrderItem = require('../database/models/orderItem.js');

// order table and add row to orderItem

// finding an order where the id matches the sessionId. gives the orders associated with the sessionId
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
    res.send(orders);
  } catch (e) {
    next(e);
  }
});

// returns order based on orderId being passed in. Finds out which items belongs to cart
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

// add to cart route
router.post('/order/:orderId', async (req, res, next) => {
  try {
    // orderId, productId comes from req.body. quantity one by default
    const orderId = parseInt(req.body.orderId, 10);
    const productId = parseInt(req.body.productId, 10);
    const quantity = parseInt(req.body.quantity, 10);
    const cartItem = { orderId, productId, quantity };
    const order = await OrderItem.Create(cartItem);
    res.send(order);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
