const Discord = require('discord.js');
const parse = require('./tools/parse');

const client = new Discord.Client();

var config = require('./config');
const discordToken = config.discord_token;

client.on('ready', () => {
  console.log('Discordant ready!');
});

client.on('message', message => { 
  parse.parse(message);
});

client.on("error", console.error);
client.on("warn", console.warn);

client.login(discordToken);