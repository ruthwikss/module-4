const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  totalAmount: Number,
  status: String
}, { timestamps: true })

OrderSchema.index({ userId: 1, createdAt: -1 }) // ESR INDEX

module.exports = mongoose.model('Order', OrderSchema)
