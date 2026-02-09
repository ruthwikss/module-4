const router = require('express').Router()
const stripe = require('stripe')('sk_test_XXXXXXXXXXXXXXXX')

router.post('/pay', async (req, res) => {
  const intent = await stripe.paymentIntents.create({
    amount: 5000,
    currency: 'inr'
  })
  res.json(intent)
})

module.exports = router
