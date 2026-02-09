const mongoose = require('mongoose')
const Order = require('../models/Order')
const Product = require('../models/Product')

exports.createOrder = async (req, res) => {
  const session = await mongoose.startSession()
  session.startTransaction()

  try {
    const product = await Product.findById(req.body.productId).session(session)

    if (product.stock <= 0) throw "Out of stock"

    product.stock -= 1
    await product.save()

    const order = await Order.create([{
      userId: req.body.userId,
      totalAmount: product.price,
      status: "PLACED"
    }], { session })

    await session.commitTransaction()
    res.json(order)

  } catch (e) {
    await session.abortTransaction()
    res.status(400).json({ error: e })
  }
}
