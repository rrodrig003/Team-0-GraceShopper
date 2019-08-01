const router = require('express').Router();
const productRoutes = require('./product.js');
const categories = require('./categories');

router.use('/products', productRoutes);
router.use('/categories', categories);

module.exports = router;
