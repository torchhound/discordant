var exports = module.exports = {};

const weather = require('./weatherQuery');
const utils = require('./utils');

exports.parse = function(message){
	if (message.content.includes("weather")) {
  		var area = message.content.substring(message.content.indexOf("weather") + 1);
  		var currentWeather = weather.currentLocalWeatherQuery(area);
    	message.channel.send(currentWeather);
  	} else if (message.content.includes("status")) {
  		message.channel.send("Discordant ready!");
  	} else if (message.content.includes("ls")) {
  		message.channel.send("weather {location} \n status \n ls \n init \n");
  	} else if (message.content.includes("init")) {
  		utils.makeChannel(message, "breaking_news");
  	} 
}