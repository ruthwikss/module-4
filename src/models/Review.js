const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  rating: Number
})

module.exports = mongoose.model('Review', ReviewSchema)
