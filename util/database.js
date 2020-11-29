const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://ahmed_nasr97:ahmedfci20150043@cluster0.8ltxu.mongodb.net/match')
    .then(client => {
        console.log("Connected!");
        _db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
    });
}

const getDb = () => {
    if(_db){
        return _db;
    }
    else{
        throw "no database found";
    }
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;