var connection = require("./connection.js");

var orm = {
	selectAll: function(table, cb) {
		var query = "SELECT * FROM " + table;
		connection.query(query, function(err, data) {
			if (err) throw err;
			cb(data);
		});
	},
	insertOne: function(table, colName1, colName2, colValue1, colValue2, cb) {
		var query = "INSERT INTO " + table + " (" + colName1 + ", " + colName2 + ") ";
		query += "VALUES('" + colValue1 + "', " + colValue2 + ")";
		console.log(query);
		connection.query(query, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function(table, colName, colValue, id, cb) {
		var query = "UPDATE " + table;
		query += " SET " + colName + " = " + colValue + " WHERE id = " + id;
		console.log(query);
		connection.query(query, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	deleteOne: function(table, id, cb) {
		var query = "DELETE FROM " + table;
		query += " WHERE id = " + id;
		connection.query(query, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;