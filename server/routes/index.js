const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/products', require('./product'));
router.use('/categories', require('./categories'));
router.use('/cart', require('./cart'));
router.use('/order', require('./order'));

module.exports = router;
