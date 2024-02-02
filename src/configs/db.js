const mysql = require('mysql2');
const {
  DB_HOST,
  DB_NAME,
  DB_PASS,
  DB_USER
} = require('./env')
const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASS,
});

module.exports = db