require('dotenv').config();
const express = require('express');
const cors = require('cors');
const knex = require('./knex');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const mealRoutes = require('./routes/meals');
const aiRoutes = require('./routes/ai');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ok:true, msg:'AI Diet Advisor API'}));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/meals', mealRoutes);
app.use('/api/ai', aiRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
