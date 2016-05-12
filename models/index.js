var db = require('./_db');

var Day = require('./day');
var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

// Itinerary Item Associations
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

// Day Associations
Day.belongsTo(Hotel);
Restaurant.belongsTo(Day);
Activity.belongsTo(Day);

module.exports = db;
