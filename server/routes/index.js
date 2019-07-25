const router = require('express').Router();
const categories = require('./categories')
const productRoutes = require("./product.js");

router.use('/products', productRoutes);

router.use('/categories', categories)

module.exports = router;
