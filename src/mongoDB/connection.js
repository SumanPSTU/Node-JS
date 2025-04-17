import { MongoClient } from 'mongodb';

// Connection string for local MongoDB
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function connectToDatabase() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB');

        // Access the 'school' database and 'student' collection
        const db = client.db('school');
        const collection = db.collection('student');

        // Insert a document into the 'student' collection
        const document = {
            name: 'Sujon',
            id: 220014,
            faculty: 'CSE'
        };
        await collection.insertOne(document);
        console.log('Data inserted');

        // Fetch all documents from the 'student' collection
        const documents = await collection.find({}, {projection: {_id:0,name: 1, faculty: 1}}).toArray();
        for (let i =0;i<documents.length;i++){
            console.log("name is "+documents[i].name +" and faculty is "+documents[i].faculty)
        }
    } catch (err) {
        console.error('Error:', err);
    } finally {
        await client.close(); // Close the connection
        console.log('Connection closed');
    }
}

// Execute the function
connectToDatabase();
