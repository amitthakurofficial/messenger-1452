const Sequelize = require("sequelize");

const db = new Sequelize('messenger', 'postgres', 'psq', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = db;
