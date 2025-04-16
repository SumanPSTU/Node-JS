import connection  from "./Connection.js";


connection.connect(function (err){
    if (err) throw err;
    const query = 'insert into school.student values (343,"swadin","FBS")';
    connection.query(query,function (err,result){
        if (err) throw err;
        console.log('data inserted');
    });
});

