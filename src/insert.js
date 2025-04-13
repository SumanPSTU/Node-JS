// createTable.js
const createConnection = require('./Connection');

async function createTable() {
    try {
        const connection = await createConnection();
        const query = `
            CREATE TABLE IF NOT EXISTS student (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                faculty VARCHAR(50)
            )
        `;
        await connection.execute(query);
        console.log('Table created');
        await connection.end(); // good practice to close the connection
    } catch (err) {
        console.error('Error creating table:', err);
    }
}

createTable();
