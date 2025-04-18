import collection from "./connection.js";


async  function updateData(){

    const coll = await collection();
    const query = {name:'Sumon'};
    const update = {$set: {name:'sabuj',faculty:'Math'}};


    const result = await coll.updateMany(query,update);
    if (result.modifiedCount>0){
        console.log('update successful');
    }else {
        console.log('nothing happened');
    }

}
updateData();