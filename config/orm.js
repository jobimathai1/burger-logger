// Import MySQL connection.
var connection = require("./connection");

//ORM variable to hold all the methods

var orm = {
  //Select all from the burgers tables
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //insert a record into the burgers table with the burger name & false for devoured field
  insertOne: function(table, col, val, cb) {
    var colString = col.toString();
    var valString = "'"+ val + "'";
    var queryString = "INSERT INTO " + table + '(' + colString + ')' + 'VALUES(' + valString + ');'
    console.log(queryString);
    connection.query(queryString, val, function(err, res){
      if(err) throw err;
      cb(res);
    });
  },

  //update an existing record & change the devoured column from false to true for a given burger
  updateOne: function(table, col, newVal, condition, cb) {
    var queryString = 'update' + table + 'SET' + col + '=' + newVal + 'where' + condition + ';'
    console.log(queryString);

    connection.query(queryString, function (err, res){
      if (err) throw err;
      cb(res);
    });
  }
}
module.exports = orm;
