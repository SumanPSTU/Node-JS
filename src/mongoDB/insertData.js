import collection from "./connection.js";

async function insertData(){
    const document={
        name:'sajol',
        id:2839,
        faculty:'BBA'
    }
    try {
        const coll = await collection();
        const  result = await coll.insertOne(document);
        console.log(result.insertedId)
    }catch (err){
        console.error('error happened')
        throw err
    }
}
insertData();