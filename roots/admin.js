const path = require('path');

const express = require('express');

const router = express.Router();

const matchAdmin = require('../controllers/admin');

router.get('/add_match',matchAdmin.get_add_match);

router.post('/add_match',matchAdmin.post_add_match);

router.get('/get_matches',matchAdmin.get_matches);   

router.get('/edit/:id',matchAdmin.get_editMatch);

router.post('/edit_match',matchAdmin.post_editMatch);

router.post('/delete_match',matchAdmin.deleteMatch);

module.exports = router;