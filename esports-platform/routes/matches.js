// routes/matches.js
const express = require('express');
const Match = require('../models/Match');
const Tournament = require('../models/Tournament');
const Team = require('../models/Team');
const router = express.Router();    
const auth = require('../middleware/auth');

router.post('/schedule', auth(['organizer']), async (req, res) => {
  try {
    const { tournamentId } = req.body;
    const tournament = await Tournament.findById(tournamentId).populate('teams');
    if (!tournament) return res.status(404).json({ error: 'Tournament not found' });

    // Пример жеребьевки и расписания матчей
    const teams = tournament.teams;
    for (let i = 0; i < teams.length; i += 2) {
      const match = new Match({ tournament: tournamentId, team1: teams[i]._id, team2: teams[i + 1]._id });
      await match.save();
    }
    res.json({ message: 'Matches scheduled' });
  } catch (error) {
    res.status(500).json({ error: 'Error scheduling matches' });
  }
});

module.exports = router;
