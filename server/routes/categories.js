const router = require('express').Router();
const Category = require('../database/models/category.js');

router.get('/', (req, res, next) => {
  Category.findAll({ attributes: ['id', 'name', 'description'] })
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
      res.json({ id: category.id, name: category.name, description: category.description });
    })
    .catch((e) => {
      console.error(e);
      next(e);
    });
});

router.post('/create', (req, res, next) => {
  Category.create(req.body)
    .then(category => res.json(category))
    .catch((e) => {
      console.log('error in category.create', e);
      next(e);
    });
});

module.exports = router;
