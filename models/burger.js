var orm = require("../config/orm.js");

var burger = {
	all: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	create: function(colName1, colName2, colValue1, colValue2, cb) {
		orm.insertOne("burgers", colName1, colName2, colValue1, colValue2, function(res) {
			cb(res);
		});
	},
	update: function(colName, colValue, id, cb) {
		orm.updateOne("burgers", colName, colValue, id, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;