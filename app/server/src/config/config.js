require('dotenv').config();

const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT || '3002',
  database: process.env.MYSQL_DATABASE || "people",
  host: process.env.DB_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};