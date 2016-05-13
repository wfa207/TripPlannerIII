var express = require('express');
var router = express.Router();
var Day = require('../../models/day.js');
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Place = require('../../models/place');
var Promise = require('bluebird');
// Do we need to require other models as well?

router.get('/', function(req, res, next) {
	var id = req.params.id;
	Day.findAll()
	.then(function(days) {
		res.send(days);
	})
	.catch(function(err) {
		console.error(err);
	});
});

router.get('/:id', function(req, res, next) {
	var id = req.params.id;
	Day.findAll({
		where: {number: id}
	})
	.then(function(days) {
		res.send(days);
	})
	.catch(function(err) {
		console.error(err);
	});
});

// router.get('/:id', function(req, res, next) {
	// var id = req.params.id;
// });

router.post('/:id', function(req, res, next) {
	var id = req.params.id;
	Day.create({
		number : id
	})
	.then(function(newDay) {
		res.send(newDay);
	})
	.catch(function(err) {
		console.error(err);
	});
});

// router.delete('/:id', function(req, res, next) {
// 	var id = req.params.id;
// });

// router.get('/:id/hotels', function(req, res, next) {
	// var id = req.params.id;
// });

// router.get('/:id/restaurants', function(req, res, next) {
	// var id = req.params.id;
// });

// router.get('/:id/activities', function(req, res, next) {
	// var id = req.params.id;
// });

// router.post('/:id/hotels', function(req, res, next) {
	// var id = req.params.id;
// });

// router.post('/:id/restaurants', function(req, res, next) {
	// var id = req.params.id;
// });

// router.post('/:id/activities', function(req, res, next) {
	// var id = req.params.id;
// });

module.exports = router;