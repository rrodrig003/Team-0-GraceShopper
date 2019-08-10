/* eslint no-underscore-dangle: ["error", { "allow": ["_options"] }] */

const router = require('express').Router();
const Order = require('../database/models/order');
const OrderItem = require('../database/models/orderItem');
const Product = require('../database/models/product');

module.exports = router;

router.post('/create', (req, res) => {
  const { sessionId } = req.body;
  if (!sessionId) {
    res.status(400).send({
      error: 'Invalid Request',
    });
  } else {
    Order.findOrCreate({
      where: {
        status: 'Cart',
        sessionId,
      },
    })
      .then(([order]) => {
        const newRecord = order._options.isNewRecord;
        if (newRecord) res.status(201).json(order);
        else if (!newRecord) res.status(200).json(order);
        else throw new Error();
      })
      .catch(() => {
        res.status(500).send({
          error: 'Internal Server Error',
        });
      });
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const orderItems = await OrderItem.findAll({
      where: { orderId: req.params.id },
    });
    const getProductIds = orders => orders.map(order => order.productId);

    const products = await Product.findAll({
      where: { id: getProductIds(orderItems) },
    });
    res.json({ products, orderItems });
  } catch (e) {
    next(e);
  }
});
