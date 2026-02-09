const Order = require('../models/Order')
const Product = require('../models/Product')

exports.totalSales = () =>
  Order.aggregate([
    { $group: { _id: null, revenue: { $sum: "$totalAmount" } } }
  ])

exports.ordersPerUser = () =>
  Order.aggregate([
    { $group: { _id: "$userId", orders: { $sum: 1 } } }
  ])

exports.productsByCategory = () =>
  Product.aggregate([
    { $group: { _id: "$category", count: { $sum: 1 } } }
  ])
