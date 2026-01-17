const express = require('express');
const supabase = require('../config/database');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// GET DOWNLOAD LINK FOR PURCHASED PRODUCT
router.get('/:product_id', authMiddleware, async (req, res) => {
  try {
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .select('*')
      .eq('buyer_id', req.userId)
      .eq('product_id', req.params.product_id)
      .single();

    if (orderError || !order) {
      return res.status(403).json({ error: 'You have not purchased this product' });
    }

    const { data: product, error: productError } = await supabase
      .from('products')
      .select('file_url')
      .eq('id', req.params.product_id)
      .single();

    if (productError || !product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ download_url: product.file_url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
