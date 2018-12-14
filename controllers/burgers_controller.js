var express = require("express");
var router = express.Router();

//import burger model
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	burger.SelectAll(function(burger_data) {
		console.log(burger_data);
		res.render("index", {burger_data});
	});
});

router.post("/api/create", function(req, res) {
	burger.insertOne("burger_name", [req.body.burger_name], function() {
    res.redirect('/');
	});
});

router.put("/api/update:id", function(req, res) {
  var condition = "id =" + req.params.id;
  console.log("condition", condition);
  burger.updateOne('devoured', req.body.devoured, condition, function(){
    res.redirect('/');
  });
});

  module.exports = router;