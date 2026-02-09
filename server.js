const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(
  "mongodb+srv://ruthwiksss111_db_user:1Ubc9hywccCzewk8@cluster0.ibdt1pj.mongodb.net/"
).then(() => console.log("MongoDB Connected"))

app.use('/products', require('./src/routes/product.routes'))
app.use('/orders', require('./src/routes/order.routes'))
app.use('/payments', require('./src/routes/payment.routes'))

app.listen(5000, () => console.log("Server running on 5000"))
