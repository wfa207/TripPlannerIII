var express = require('express');
var router = express.Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Place = require('../../models/place');
var Promise = require('bluebird');

router.get('/hotels', function(req, res, next) {
    Hotel.findAll({
        include: [Place]
    })
    .then(function(hotels) {
        res.send(hotels);
    });
});

router.get('/restaurants', function(req, res, next) {
    Restaurant.findAll({
        include: [Place]
    })
    .then(function(restaurants) {
        res.send(restaurants);
    });
});

router.get('/activities', function(req, res, next) {
    Activity.findAll({
        include: [Place]
    })
    .then(function(activities) {
        res.send(activities);
    });
});

module.exports = router;