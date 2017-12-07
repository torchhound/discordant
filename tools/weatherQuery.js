const weather = require('weather.js');

function currentLocalWeatherQuery(area) {
	Weather.getCurrent(area, function(current) {
		return ["currently:",current.temperature(),"and",current.conditions()].join(" ");
	});
}

//TODO(torchhound) add weather forecast