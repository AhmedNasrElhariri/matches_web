const Match = require('../models/match');

exports.get_add_match = (req, res, next) => {
    res.render('admin/add_matches');
}
exports.post_add_match = (req, res, next) => {
    const homeTeam = req.body.homeTeam;
    const awayTeam = req.body.awayTeam;
    const homeScore = req.body.homeScore;
    const awayScore = req.body.awayScore;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const duration = req.body.duration;
    const league = req.body.league;
    const date = req.body.date;
    const match = new Match(homeTeam, awayTeam, homeScore, awayScore, startTime, endTime, duration,league,date,null);
    match.save()
    .then(result => {
        res.redirect('/admin/get_matches');
    });
}

exports.get_matches = (req, res, next) => {
    Match.find_All_Admin_Matches()
    .then(matches => {
        res.render('admin/admin_matches',{
            matches: matches
        })
    })
}

exports.get_editMatch = (req, res, next) => {
    const match_id = req.params.id;
    Match.findById(match_id)
    .then(match => {
        res.render('admin/update_match',{
            match: match
        })
    })
    .catch(err => {
        console.log(err);
    })
}

exports.deleteMatch = (req, res, next) => {
    const matchId = req.body.matchId;
    Match.deleteMatch(matchId)
    .then(result => {
        res.redirect('/admin/get_matches');
    })
}

exports.post_editMatch = (req, res, next) => {
    const homeTeam = req.body.homeTeam;
    const awayTeam = req.body.awayTeam;
    const homeScore = req.body.homeScore;
    const awayScore = req.body.awayScore;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const duration = req.body.duration;
    const league = req.body.league;
    const date = req.body.date;
    const id = req.body.id;
    const match = new Match(homeTeam, awayTeam, homeScore, awayScore, startTime, endTime, duration,league,date,id);
    match.updateMatch()
    .then(result => {
        res.redirect('/admin/get_matches');
    })
    .catch(err => {
        console.log(err);
    })
}