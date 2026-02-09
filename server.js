const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ MongoDB Atlas connection (NO env needed)
mongoose.connect(
  "mongodb+srv://ruthwiksss111_db_user:1Ubc9hywccCzewk8@cluster0.ibdt1pj.mongodb.net/module4"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));


// ✅ Routes
app.use('/products', require('./src/routes/product.routes'));
app.use('/orders', require('./src/routes/order.routes'));
app.use('/payments', require('./src/routes/payment.routes'));

// ✅ IMPORTANT FOR RENDER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
