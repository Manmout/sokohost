const express = require('express');
const bcrypt = require('bcryptjs');
const supabase = require('../config/database');
const { generateToken } = require('../utils/jwt');

const router = express.Router();

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from('users')
      .insert([{ email, password: hashedPassword, name }])
      .select();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const token = generateToken(data[0].id);
    res.json({ token, user: data[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Missing email or password' });
    }

    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('email', email)
      .single();

    if (error || !data) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, data.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(data.id);
    res.json({ token, user: { id: data.id, email: data.email, name: data.name } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
