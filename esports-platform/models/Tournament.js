// models/Tournament.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tournament = sequelize.define('Tournament', {
  name: { type: DataTypes.STRING, allowNull: false },
  description: DataTypes.TEXT,
  startDate: DataTypes.DATE,
  stage: { type: DataTypes.ENUM('registration', 'group', 'playoff'), defaultValue: 'registration' },
});

module.exports = Tournament;
