const express = require('express');
const router = express.Router();
const knex = require('../knex');

// CRUD for meals
router.post('/', async (req, res) => {
  const [id] = await knex('meals').insert(req.body);
  res.json({ id });
});

router.get('/user/:userId', async (req, res) => {
  const meals = await knex('meals').where({ user_id: req.params.userId }).orderBy('date','asc');
  res.json(meals);
});

router.put('/:id', async (req, res) => {
  await knex('meals').where({ id: req.params.id }).update(req.body);
  res.json({ ok:true });
});

router.delete('/:id', async (req, res) => {
  await knex('meals').where({ id: req.params.id }).del();
  res.json({ ok:true });
});

module.exports = router;
