import connection from "./Connection.js";
connection.connect(function (err){
    if (err) throw err;
    const query = "delete from school.student where id = 343";
    connection.query(query,function (err,result){
        if (err) throw err;
        console.log(result.affectedRows);
    })
})