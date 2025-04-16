import mysql from 'mysql2'

let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root@pass',
    database:'school'
});

export default connection;