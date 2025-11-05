const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/:id', async (req, res) => {
  const user = await knex('users').where({ id: req.params.id }).first();
  if (!user) return res.status(404).json({ error: 'Not found' });
  delete user.password;
  res.json(user);
});

router.put('/:id', async (req, res) => {
  await knex('users').where({ id: req.params.id }).update(req.body);
  const u = await knex('users').where({ id: req.params.id }).first();
  delete u.password;
  res.json(u);
});

module.exports = router;
