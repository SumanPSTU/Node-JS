var http = require('http');
var mysql = require('mysql');


var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root@pass'
});

con.connect(function (err){
   if (err) throw err;
   console.log('connection success');
});