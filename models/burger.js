/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var burger = {
	all: function (cb) {     
		orm.all('burgers', function (res) {
			cb(res);
			console.log("returning all burgers")
		});
	},
	// cols and vals are arrays
	create: function (column, values, cb) {
		orm.create('burgers',column,values, function (res) {
			cb(res);
			console.log("created new burger")
		});
	},
	update: function (column, newValue, condition, cb) {
		orm.update('burgers', column, newValue, condition, function (res) {
			cb(res);
			console.log("the burger is now devoured")
		});
	}
};

module.exports = burger;