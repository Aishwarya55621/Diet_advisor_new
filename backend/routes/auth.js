const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../knex');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const [id] = await knex('users').insert({ name, email, password: hashed });
  res.json({ id, name, email });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await knex('users').where({ email }).first();
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
  res.json({ token });
});

module.exports = router;
