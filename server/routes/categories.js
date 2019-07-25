const router = require('express').Router()
const Category = require('../database/models/Category.js')

router.get('/', (req, res, next) => {
  Category.findAll()
    .then(categories => {
      res.json(categories)
    })
    .catch(e => {
      console.error(e)
      next(e)
    })
})

router.get('/:id', (req, res, next) => {
  Category.findbyId(req.params.id)
    .then(category => {
      res.json(category)
    })
    .catch(e => {
      console.error(e)
      next(e)
    })
})

export default router;
