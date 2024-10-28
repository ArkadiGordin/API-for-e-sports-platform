// models/index.js
const sequelize = require('../config/database');
const User = require('../User');
const Tournament = require('./Tournament');
const Team = require('./Team');
const Match = require('./Match');

User.hasMany(Tournament, { foreignKey: 'organizerId' });
Tournament.belongsTo(User, { as: 'organizer', foreignKey: 'organizerId' });

Tournament.hasMany(Team, { foreignKey: 'tournamentId' });
Team.belongsTo(Tournament, { foreignKey: 'tournamentId' });

Tournament.hasMany(Match, { foreignKey: 'tournamentId' });
Match.belongsTo(Tournament, { foreignKey: 'tournamentId' });

Team.hasMany(Match, { as: 'team1', foreignKey: 'team1Id' });
Team.hasMany(Match, { as: 'team2', foreignKey: 'team2Id' });

module.exports = { sequelize, User, Tournament, Team, Match };
