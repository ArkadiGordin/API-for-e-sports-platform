// routes/tournaments.js
const express = require('express');
const Tournament = require('../models/Tournament');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/', auth(['organizer']), async (req, res) => {
  try {
    const { name, description, startDate } = req.body;
    const tournament = new Tournament({
      name,
      description,
      startDate,
      organizer: req.user.userId,
    });
    await tournament.save();
    res.status(201).json(tournament);
  } catch (error) {
    res.status(500).json({ error: 'Error creating tournament' });
  }
});

module.exports = router;
