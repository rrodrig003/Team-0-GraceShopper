const router = require('express').Router();
const User = require('../database/models/user');
const Order = require('../database/models/order');

// find all users could be used on admin page
router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch((e) => {
      console.error('error in all users route', e);
      next(e);
    });
});

// get orders by user id
// TODO: safeguard route to set default as all statuses exept cart
router.get('/:id/orders', async (req, res, next) => {
  // const statuses = req.query.status.split(',');
  try {
    const orders = await Order.findAll({
      where: {
        userId: req.params.id,
        status: ['Purchased', 'Shipped', 'Delivered'],
      },
    });
    res.json(orders);
  } catch (e) {
    next(e);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
