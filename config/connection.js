// Set up MySQL connection
var mysql = require('mysql');

var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: "",
        database: 'burgers_db'
    });
};
connection.connect();

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "Giselle0702!",
//     database: "burgers_db"
// });

// Make connection
// connection.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadID);
// });

// Export for ORM
module.exports = connection;