var exports = module.exports = {};

const weather = require('weather.js');

var config = require('../config');
const weatherToken = config.weather_token;

weather.setApiKey(weatherToken);

exports.currentLocalWeatherQuery = function(area) {
	weather.getCurrent(area, function(current) {
		return ["currently:", current.temperature(),"and", current.conditions()].join(" ");
	});
}

//TODO(torchhound) add weather forecast