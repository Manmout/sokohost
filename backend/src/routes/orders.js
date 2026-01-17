const express = require('express');
const stripe = require('../config/stripe');
const supabase = require('../config/database');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// CREATE PAYMENT INTENT
router.post('/create-intent', authMiddleware, async (req, res) => {
  try {
    const { amount, currency = 'usd', product_id } = req.body;

    const intent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency,
      metadata: { product_id, user_id: req.userId }
    });

    res.json({ clientSecret: intent.client_secret });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CONFIRM PAYMENT
router.post('/confirm', authMiddleware, async (req, res) => {
  try {
    const { product_id, payment_intent_id } = req.body;

    const intent = await stripe.paymentIntents.retrieve(payment_intent_id);

    if (intent.status !== 'succeeded') {
      return res.status(400).json({ error: 'Payment not confirmed' });
    }

    const { data, error } = await supabase
      .from('orders')
      .insert([{
        buyer_id: req.userId,
        product_id,
        payment_intent_id,
        status: 'completed'
      }])
      .select();

    if (error) throw error;
    res.json({ order: data[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET USER ORDERS
router.get('/', authMiddleware, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('buyer_id', req.userId);

    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
