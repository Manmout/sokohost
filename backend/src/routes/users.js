const express = require('express');
const supabase = require('../config/database');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// GET CURRENT USER
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('id, email, name, created_at')
      .eq('id', req.userId)
      .single();

    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE PROFILE
router.put('/profile', authMiddleware, async (req, res) => {
  try {
    const { name, avatar_url } = req.body;

    const { data, error } = await supabase
      .from('users')
      .update({ name, avatar_url })
      .eq('id', req.userId)
      .select();

    if (error) throw error;
    res.json(data[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
