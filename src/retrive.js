import connection from "./Connection.js";

connection.connect(function (err){
    if (err) throw err;
    const query = 'select * from school.student order by id asc';
    connection.query(query,function (err,result){
        if (err) throw err;
        console.log(result)
    })
})