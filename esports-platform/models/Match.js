// models/Match.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Match = sequelize.define('Match', {
  date: DataTypes.DATE,
  score: { type: DataTypes.JSON }, // Счет в формате JSON { team1: 0, team2: 0 }
});

module.exports = Match;
