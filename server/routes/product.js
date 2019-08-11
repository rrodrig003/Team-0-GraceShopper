/* eslint-disable no-console */
const router = require('express').Router();
const Product = require('../../server/database/models/product.js');
const Category = require('../database/models/category.js');

// route to get all products from db
router.get('/', (req, res, next) => {
  Product.findAll()
    .then(products => res.json(products))
    .catch((e) => {
      console.error('error in products route', e);
      next(e);
    });
});

router.get('/:id', (req, res, next) => {
  Product.findByPk(req.params.id)
    .then(product => res.send(product))
    .catch((e) => {
      console.error('error in single product route', e);
      next(e);
    });
});

router.post('/', (req, res, next) => {
  Product.create(req.body)
    .then(product => res.json(product))
    .catch((e) => {
      console.log('error in product.create', e);
      next(e);
    });
});

router.put('/:id', (req, res, next) => {
  Product.findByPk({
    where: {
      id: req.params.id,
    },
  })
    .then(product => product.update(req.body))
    .catch((e) => {
      console.log('error in product update', e);
      next(e);
    });
});

router.delete('/:id', (req, res, next) => {
  Product.findByPk(req.params.id)
    .then(product => product.destroy())
    .then(result => res.json(result))
    .catch((e) => {
      console.log('error in product destroy route', e);
      next(e);
    });
});

router.put('/assigncategory', async (req, res, next) => {
  const { categoryName, productName } = req.body;
  try {
    const category = await Category.findOne({
      where: {
        name: categoryName,
      },
    });

    const product = await Product.findOne({
      where: {
        name: productName,
      },
    });
    const updatedProduct = await product.update(
      { categoryId: category.id },
    );

    res.json({ updatedProduct });
  } catch (e) {
    console.log('error assinging category to product in prod put route', e);
    next(e);
  }
});

module.exports = router;
