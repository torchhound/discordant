const Discord = require('discord.js');
const weather = require('./tools/weatherQuery')

const client = new Discord.Client();

var config = require('./config');
const discordToken = config.discord_token;

client.on('ready', () => {
  console.log('Discordant ready!');
});

client.on('message', message => { //TODO(torchhound) break into parsing module
  if (message.content.includes("weather")) {
  	var area = message.content.substring(message.content.indexOf("weather") + 1);
  	var currentWeather = weather.currentLocalWeatherQuery(area);
    message.channel.send(currentWeather);
  }
});

client.login(discordToken);