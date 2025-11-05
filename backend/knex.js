const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'appuser',
    password: process.env.DB_PASSWORD || 'apppassword',
    database: process.env.DB_NAME || 'diet_advisor',
    port: process.env.DB_PORT || 3306
  },
  pool: { min: 0, max: 7 }
});
module.exports = knex;
