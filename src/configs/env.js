require('dotenv').config()
module.exports = {
  PORT: process.env.PORT || 3000,
  DB_HOST: process.env.DB_HOST || null,
  DB_NAME: process.env.DB_NAME || null,
  DB_USER: process.env.DB_USER || null,
  DB_PASS: process.env.DB_PASS || null,
}