// server.js
require('dotenv').config();
const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
app.use(express.json());

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Unable to connect to database:', err));

const port = process.env.PORT || 3306;
app.listen(port, () => console.log(`Server running on port ${port}`));
const { sequelize } = require('./models');

sequelize.sync({ alter: true })  // создаст таблицы, если их нет
  .then(() => {
    console.log('Database synced');
    const port = process.env.PORT || 3306;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(error => console.log('Error syncing database:', error));
