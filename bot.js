var TelegramBot = require('node-telegram-bot-api');

var token = '5266816142:AAHG9RC8tQ4j57Sy0s1ae94hAYI1nIoWxSQ';
var bot = new TelegramBot(token, {polling: true});
bot.on("polling_error", (err) => console.log(err));
