const router = require('express').Router();
const Category = require('../database/models/category.js');

router.get('/', (req, res, next) => {
  Category.findAll()
    .then((categories) => {
      res.json(categories);
    })
    .catch((e) => {
      console.error(e);
      next(e);
    });
});

router.get('/:id', (req, res, next) => {
  Category.findByPk(req.params.id)
    .then((category) => {
      res.json(category);
    })
    .catch((e) => {
      console.error(e);
      next(e);
    });
});

module.exports = router;
