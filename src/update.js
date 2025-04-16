import connection from "./Connection.js";

connection.connect(err => {
    if (err) throw err;
    const  query = "update school.student set name = 'sumon das' where id = 9";

    connection.query(query,(err,result)=>{
        if (err) throw err;
        console.log(result.affectedRows);
    });
});