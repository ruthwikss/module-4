const router = require('express').Router()
const Product = require('../models/Product')

router.get('/', async (req, res) => {
  const { cursor, q } = req.query

  const filter = q ? { $text: { $search: q } } : {}
  if (cursor) filter._id = { $gt: cursor }

  const products = await Product.find(filter).limit(5)
  res.json(products)
})

module.exports = router
