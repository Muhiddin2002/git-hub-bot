const TeleBot = require('telebot');
const bot = new TeleBot('423747052:AAFHbER65H7wxbnMpZR8OHuIccRE8oivXko');


bot.on('text', (msg) => msg.reply.text(msg.text));

bot.start();