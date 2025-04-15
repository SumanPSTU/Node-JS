var con = require('./Connection');
con.connect(function (err){
    if (err) throw err;
    console.log('connected')
})
// con.query('insert into student values (92,"hero","cse")',function (err){
//     if (err) throw err;
//     console.log('inserted')
// })
con.query('select * from student  order by id desc ',function (err,result){
    if (err) throw err;
    console.log(result);
})