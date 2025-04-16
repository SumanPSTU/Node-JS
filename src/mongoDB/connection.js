import {mongodb} from 'mongodb';

const mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/school";
mongoClient.connect(url,function (err){
    if (err) throw err;
    console.log('connected');
})