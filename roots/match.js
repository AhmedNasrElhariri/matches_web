const path = require('path');

const express = require('express');

const router = express.Router();

const matchController = require('../controllers/match');

router.get('/',matchController.get_matches);

router.get('/get_matches_of_league/:league',matchController.get_matches_league);

router.get('/get_matches_of_team/:team',matchController.get_matches_team);

router.get('/get_matches_of_date/:date',matchController.get_matches_date);

module.exports = router;