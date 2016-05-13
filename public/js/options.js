/*
	-------------------------
	Variable Declarations
	-------------------------
*/

var $addItemButton = $('#options-panel').find('button');
var $itinerary = $('#itinerary');
var $addDayButton = $('#day-add');
var $dayTitle = $('#day-title').children('span');
var $removeDayButton = $('#day-title').children('button');
var $dayButtonList = $('.day-buttons');
// How do we make currentDayNum persist
var currentDayNum = 1;

var $listGroups = {
    hotel: $('#hotel-list').children('ul'),
    restaurant: $('#restaurant-list').children('ul'),
    activity: $('#activity-list').children('ul')
};

/*
	-------------------------
	Helper functions
	-------------------------
*/

	function createDayButton(number) {
        return $('<button class="btn btn-circle day-btn">' + number + '</button>');
    }

    function switchDay(dayNum) {
        wipeDay();
        // currentDayNum = dayNum;
        // renderDay();
        $dayTitle.text('Day ' + dayNum);
        mapFit();
    }

    function wipeDay() {

        $dayButtonList.children('button').removeClass('current-day');

        Object.keys($listGroups).forEach(function (key) {
           $listGroups[key].empty();
        });

        if (days[currentDayNum - 1]) {
            days[currentDayNum - 1].forEach(function (attraction) {
                attraction.marker.setMap(null);
            });
        }
    }

    function mapFit() {

        var currentDay = days[currentDayNum - 1];
        var bounds = new google.maps.LatLngBounds();

        currentDay.forEach(function (attraction) {
            bounds.extend(attraction.marker.position);
        });

        map.fitBounds(bounds);

    }

/*
	-----------------------------
	AJAX Methods on LOAD
	-----------------------------
*/


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

$.get('api/day', function(days) {
	days.forEach(function(day) {
		var newDayButton = createDayButton(+day.number);
		$addDayButton.before(newDayButton);
	});
});


/*
	-------------------------
	AJAX Requests for Days
	-------------------------
*/

// our POST request
$addDayButton.on('click', function () {
		var newDayNum = +$(this).prev().text()+1;
		var $newDayButton = createDayButton(newDayNum);
		var me = this;
		$.post('/api/day/'+newDayNum, function (data) {
			// NEED TO MAKE SURE response is NOT FOR EXISTING DAY!!
			$(me).before($newDayButton);
		})
		.fail( console.error.bind(console));
});

// our GET request
$dayButtonList.on('click', '.day-btn', function() {
	var dayNumberFromButton = +$(this).text();
	$.get('/api/day/'+dayNumberFromButton, function (data) {
		console.log('/GET Day ' + dayNumberFromButton + ' data: ', data);
	})
	.fail( console.error.bind(console));
    switchDay(dayNumberFromButton);
})

$addItemButton.on('click', function() {
	var $this = $(this);
    var $select = $this.siblings('select');
    $.post('/api/day/' + currentDay._id + '/hotel', {hotelId: 'THEHOTELID'})
  	.done(successHandler)
  	.fail(failureHandler);
})
/*
	-------------------------
	AJAX Requests for Days
	-------------------------
*/



// $.get('/api/day', function (data) {
// 	console.log('/GET Day 0 data: ', data);
// })
// .fail( console.error.bind(console));

// should log an empty array
/*$.post('/api/day', function (data) {
	console.log('/POST Day 1 data: ', data);
})
.fail( console.error.bind(console));

// should log a new day
$.get('/api/day', function (data) {
	console.log('/GET Day 1 data: ', data);
})
.fail( console.error.bind(console));*/
// should now log an array with the new day in it