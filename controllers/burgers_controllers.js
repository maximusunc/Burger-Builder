var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
	burger.all(function(data) {
		console.log(data);
	});
});

router.post("/api/burgers", function(req, res) {
	var burgerName = req.body.burger;
	burger.create("burger_name", "devour", burgerName, false, function(data) {
		console.log(data);
	});
});

router.put("/api/burgers/:id", function(req, res) {
	var burgerName = req.body.burger;
	var id = req.params.id;
	burger.update("burger_name", burgerName, id, function(data) {
		console.log(data);
	});
});

module.exports = router;