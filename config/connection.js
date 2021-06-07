const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'employeeTracker',
    password: '2789$Cruz'
})

module.exports = connection;