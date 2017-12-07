var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
	burger.all(function(data) {
		var burgerObj = {
			burger: data
		};
		res.render("index", burgerObj);
	});
});

router.post("/api/burgers", function(req, res) {
	var burgerName = req.body.burger;
	burger.create("burger_name", "devoured", burgerName, false, function(data) {
		res.json(data);
	});
});

router.put("/api/burgers/:id", function(req, res) {
	var id = req.params.id;
	burger.update(id, function(data) {
		res.json(data);
	});
});

router.delete("/api/burgers/:id", function(req, res) {
	var id = req.params.id;
	burger.delete(id, function(data) {
		res.json(data);
	});
});

module.exports = router;