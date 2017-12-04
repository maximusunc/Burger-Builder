var connection = require("./connection.js");

var orm = {
	selectAll: function(table, cb) {
		var query = "SELECT * FROM " + table;
		connection.query(query, function(err, data) {
			if (err) throw err;
			cd.json(data);
		});
	},
	insertOne: function(table, colName1, colName2, colValue1, colValue2, cb) {
		var query = "INSERT INTO " + table + " (" + colName + ", " + colName2 + ") ";
		query += "VALUES (" + colValue1 + ", " + colValue2 + ")";
		connection.query(query, function(err, result) {
			if (err) throw err;
			cb.status(200).end();
		});
	},
	updateOne: function(table, colName, colValue, id, cb) {
		var query = "UPDATE " + table;
		query += " SET " + colName + " = " + colValue + " WHERE id = " + id;
		connection.query(query, function(err, result) {
			if (err) throw err;
			cb.status(200).end();
		});
	}
};

module.exports = orm;