//Require packages
const mysql = require("mysql2");

//Setup PORT connection with credentials
const connection = mysql.createConnection ({
host: 'localhost',
port: 3306,
user: 'root',
password: 'toor',
database: 'employee_db',
});

module.exports = server;
