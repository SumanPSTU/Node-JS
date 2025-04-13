// Connection.js
const mysql = require('mysql2/promise');

async function createConnection() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root@pass',
        database: 'school'
    });
    return connection;
}

module.exports = createConnection;
