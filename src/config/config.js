require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  database: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost/nequidb',
  }
}

module.exports = { config };