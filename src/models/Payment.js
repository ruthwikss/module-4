const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
  orderId: mongoose.Schema.Types.ObjectId,
  status: String,
  amount: Number
})

module.exports = mongoose.model('Payment', PaymentSchema)
