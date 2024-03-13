require('dotenv').config();

const config = {
  secret: process.env.AUTH_EXPIRES || 'secret',
  expires: process.env.AUTH_EXPIRES || '1h',
  rounds:  process.env.AUTH_ROUNDS || 10
}

module.exports = { config };