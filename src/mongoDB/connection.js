import { MongoClient } from 'mongodb';

// Connection string for local MongoDB
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);
async function connectoDatabase(){
    try {
        client.connect();
        console.log('connected')

        const db = client.db('school');
        const collection = db.collection('student');
        const document={
            name:'sumon',
            id:2202014,
            faculty:'cse'
        };
        collection.insertOne(document);
        console.log('data inserted')

    }catch (err){
        throw err;
    }
}
connectoDatabase();