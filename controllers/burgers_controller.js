/*
Here is where you create all the 
functions that will do the routing for your app, 
and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

//If going to homepage redirect to the burgers route.
router.get('/', function (req, res) {
	res.redirect('/burgers');
});

//Route to get all the burgers created and stored in the database
router.get('/burgers', function (req, res) {
	burgers.all(function (data) {
		console.log(data)
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

//Route to create a new burger and add it to the list
router.post('/api/create', function (req, res) {
	burgers.create('burger_name', [req.body.name], function () {
		res.redirect('/burgers');
	});
});

//Route to move the burger from undevoured to devoured
router.put('/api/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);
	burgers.update('devoured',req.body.devoured,condition, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;
