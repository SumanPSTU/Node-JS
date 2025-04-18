import collection  from "./connection.js";

async function deleteData(){

    const  query = {name:'Sujon'};

    try {
        const coll = await collection();
        const result = await coll.deleteMany(query);
        if (result.deletedCount>0){
            console.log('data deleted successful')
        }else {
            console.log('data did not deleted');
        }
    }catch (err) {
        throw err;
    }

}
deleteData();