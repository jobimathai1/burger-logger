// Import MySQL connection.
var connection = require("../connection.js");

//ORM variable to hold all the methods

var orm = {
  //Select all from the burgers tables
  selectAll: function(cb) {
    connection.query("SELECT * FROM burgers", function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  //insert a record into the burgers table with the burger name & false for devoured field
  insertOne: function(cb) {
    connection.query(
      "INSERT INTO burgers SET ?",
      {
        burger_name: burger_name,
        devoured: false
      },
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  },

  //update an existing record & change the devoured column from false to true for a given burger
  updateOne: function(cb) {
    connection.query(
      "UPDATE burgers SET ? WHERE ?",
      [{ devoured: true }, { id: burgerID }],
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  }
};

//export orm
module.exports = orm;
