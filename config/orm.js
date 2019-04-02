// Import MySQL Connection
var connection = require("../config/connection.js");

function createQuestionmarks(num) {
    var arr = [];

    for (var i =0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // Loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden prop
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

// Object for all our SQL statement functions
var orm = {
    selectAll: function(table, cb) {
      var dbQuery = "SELECT * FROM " + table + ";";
  
      connection.query(dbQuery, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
    },
    insertOne: function(table, cols, vals, cb) {
      var dbQuery =
        "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + createQuestionmarks(vals.length) + ") ";

      console.log(dbQuery);
      connection.query(dbQuery, vals, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
    },
    updateOne: function(table, objColVals, condition, cb) {
      var dbQuery = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition;

      console.log(dbQuery);
        connection.query(dbQuery, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
    },
    deleteOne: function(table, condition, cb) {
      var dbQuery = "DELETE FROM " + table + " WHERE " + condition;
      console.log(dbQuery);

      connection.query(dbQuery, function(err, res) {
        if (err) {
            throw err;
        }
        cb(res);
    });
    }
};
// Export
module.exports = orm;