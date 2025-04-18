import {MongoClient} from "mongodb";

const collection =async ()=>{
    const url = 'mongodb://localhost:27017';
    try {
        const client = await MongoClient.connect(url);
        const database = await client.db('school');
        return  await  database.collection('student');
    }catch (err){
        console.error(err);
    }
}
export default collection;