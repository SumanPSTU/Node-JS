import collection from "./connection.js";


async function retriveData(){
    try {
       const coll  = await collection();
       const document =await coll.find({$and:[
               { name: 'sajol' },
               { faculty: 'BBA' }
           ]},{projection:{
           name:1,_id:0,faculty:1
           }}).toArray();
       console.log(document)
    }catch (err){
        console.error(err)
    }


}
retriveData();