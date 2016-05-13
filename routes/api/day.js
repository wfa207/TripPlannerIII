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
	res.send({
		data: 'response sent'
	});

	Day.findAll()
		.then(function(days) {
			console.log(days);
		})
		.catch(function(err) {
			console.log(err);
		});
});

// router.get('/:id', function(req, res, next) {
	// var id = req.params.id;
// });

router.post('/:id', function(req, res, next) {
	var id = req.params.id;
	Day.create()
});

// router.delete('/:id', function(req, res, next) {
	// var id = req.params.id;
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