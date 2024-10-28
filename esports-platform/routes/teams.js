// routes/teams.js
const express = require('express');
const Team = require('../models/Team');
const Tournament = require('../models/Tournament');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/', auth(['user']), async (req, res) => {
  try {
    const { name, players, tournamentId } = req.body;
    const tournament = await Tournament.findById(tournamentId);
    if (!tournament) return res.status(404).json({ error: 'Tournament not found' });

    const team = new Team({ name, players, tournament: tournamentId });
    await team.save();
    tournament.teams.push(team._id);
    await tournament.save();

    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ error: 'Error creating team' });
  }
});

module.exports = router;
