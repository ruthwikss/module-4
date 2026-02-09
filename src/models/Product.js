const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  stock: Number
})

ProductSchema.index({ name: "text" })           // TEXT INDEX
ProductSchema.index({ category: 1, price: 1 })  // DOMAIN INDEX

module.exports = mongoose.model('Product', ProductSchema)
