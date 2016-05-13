$.get('/api/hotels', function (hotels) {
	hotels.forEach(function(hotel) {
		var newop = new Option(hotel.name, hotel.id);
		$('#hotel-choices').append(newop);
	});
})
.fail(console.error.bind(console));

$.get('/api/restaurants', function (restaurants) {
	restaurants.forEach(function(restaurant) {
		var newop = new Option(restaurant.name, restaurant.id);
		$('#restaurant-choices').append(newop);
	});
})
.fail(console.error.bind(console));

$.get('/api/activities', function (activities) {
	activities.forEach(function(activity) {
		var newop = new Option(activity.name, activity.id);
		$('#activity-choices').append(newop);
	});
})
.fail(console.error.bind(console));

$.get('/api/day', function (data) {
	console.log('GET response data', data);
})
.fail( console.error.bind(console));

// should log an empty array
$.post('/api/day', function (data) {
	console.log('POST response data', data);
})
.fail( console.error.bind(console));

// should log a new day
$.get('/api/day', function (data) {
	console.log('GET response data', data);
})
.fail( console.error.bind(console));
// should now log an array with the new day in it