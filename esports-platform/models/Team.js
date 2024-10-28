// models/Team.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Team = sequelize.define('Team', {
  name: { type: DataTypes.STRING, allowNull: false },
  players: { type: DataTypes.JSON }, // Список игроков в формате JSON
});

module.exports = Team;
