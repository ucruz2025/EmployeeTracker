const mysql = require('mysql');
const util = require('util')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'employeeTracker',
    password: '2789$Cruz'
})

connection.connect();

connection.query = util.promisify(connection.query)

module.exports = connection;