const Sequelize = require('sequelize');
require('dotenv').config();

module.exports = new Sequelize(
    process.env.BD_NAME,
    process.env.BD_USER,
    process.env.BD_PASS,
    {
        host: process.env.BD_HOST,
        port: process.env.BD_PORT,
        dialect: 'mysql'
    }
);