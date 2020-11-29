
const Match = require('../models/match');

exports.get_matches = (req, res, next) => {
    Match.find_All_Admin_Matches()
    .then(matches => {
        res.render('matches/matches',{
            matches : matches
        })
    })
}

exports.get_matches_league = (req, res, next) => {
    const league = req.params.league;
    Match.findByLeague(league)
    .then(matches => {
        res.render('matches/matches',{
            matches: matches
        })
    })
}

exports.get_matches_team = (req, res, next) => {
    const team = req.params.team;
    Match.findByTeam(team)
    .then(matches => {
        res.render('matches/matches',{
            matches: matches
        })
    })
}

exports.get_matches_date = (req, res, next) => {
    const date = req.params.date;
    Match.findByDate(date)
    .then(matches => {
        res.render('matches/matches',{
            matches: matches
        })
    })
}