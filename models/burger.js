var orm = require("../config/orm.js");

var burger = {
	SelectAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		})
	},

	updateOne: function(col, newVal, condition, cb) {
		orm.updateOne("burgers", col, newVal, condition, function(res){
			cb(res);
		});
	},

	insertOne: function(col, val, cb) {
		orm.insertOne("burgers", col, val, function(res){
			cb(res);
		});
	}
}

module.exports = burger;