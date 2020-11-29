const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;
const ObjectID = mongodb.ObjectID;

class Match{
    constructor(homeTeam, awayTeam , homeScore, awayScore, startTime, endTime, duration, league,date,id){
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeScore = homeScore;
        this.awayScore = awayScore;
        this.startTime = startTime;
        this.endTime = endTime;
        this.duration = duration;
        this.league = league;
        this.date = date;
        this._id = id ? new ObjectID(id) : null;
    }
    save(){
        const db = getDb();
        return db.collection('matches').insertOne(this);
    }
    updateMatch(){
        const db = getDb();
        return db.collection('matches').updateOne({_id : new mongodb.ObjectID(this._id) }, { $set : this } );
    }
    static find_All_Admin_Matches(){
        const db = getDb();
        return db.collection('matches').find().toArray()
        .then(matches => {
            return matches;
        });
    }
    static findByLeague(value){
        const db = getDb();
        return db.collection('matches').find({"league":{$regex:value}}).toArray() 
        .then(matches => {
            return matches;
        })
        .catch(err => {
            console.log(err);
        });
    }
    static findByTeam(team){
        const db = getDb();
        return db.collection('matches').find({$or:[ { "homeTeam" : {$regex:team} } , {"awayTeam": {$regex:team} } ]}).toArray()
        .then(matches => {
            return matches;
        })
        .catch(err => {
            console.log(err);
        });
    }
    static findById(id){
        const db = getDb();
        return db.collection('matches').findOne({_id : new mongodb.ObjectID(id) }) 
        .then(match => {
            return match;
        })
        .catch(err => {
            console.log(err);
        });
    }
    static findByDate(date){
        const db = getDb();
        return db.collection('matches').find({ "date" : date }).toArray() 
        .then(matches => {
            return matches;
        })
        .catch(err => {
            console.log(err);
        });
    }
    static deleteMatch(id){
        const db = getDb();
        return db.collection('matches').deleteOne({_id : new mongodb.ObjectID(id) });
    }
}

module.exports = Match;