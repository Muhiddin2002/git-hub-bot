const TeleBot = require('telebot');
const bot = new TeleBot('423747052:AAFHbER65H7wxbnMpZR8OHuIccRE8oivXko');


bot.on(['/start', '/back'], msg => {
    const glavniy = bot.keyboard([
     ['🔴 Red', '⚫️ Black'],
     ['📋 Правила бота', '💰 Баланс']   ], {resize: true});
          return bot.sendMessage(msg.from.id, `📋 Описание правила игры: \n Выбираешь фишек🔴 Red или ⚫️ Black. \n И делаешь вставку (мин. 1 рубль). \n Бот рандомно выбирает одну из двух фишек. \n Если ты угадал получаешь 190% своего вставки. \n Если не угадал то проигрываешь деньги.
 10% вставки доля бота.`, {replyMarkup:glavniy});
       
 });
 
    const game = bot.keyboard([
           ['Играть'],
           ['Назад']] , {resize:true})
           const glavniy = bot.keyboard([
            ['🔴 Red', '⚫️ Black'],
            ['📋 Правила бота', '💰 Баланс']   ], {resize: true});

 bot.on('*', function (msg){
   switch(msg.text) {
        case '📋 Правила бота': 
        bot.sendMessage(msg.from.id, `📋 Описание правила игры: \n Выбираешь фишек🔴 Red или ⚫️ Black. \n И делаешь вставку (мин. 1 рубль). \n Бот рандомно выбирает одну из двух фишек. \n Если ты угадал получаешь 190% своего вставки. \n Если не угадал то проигрываешь деньги.
   10% вставки доля бота.`)
             break
       case '🔴 Red' :
       bot.sendMessage(msg.from.id,'Вы в игре', {replyMarkup: game})
              break
       case 'Назад':
       bot.sendMessage(msg.from.id, 'Вы в главном меню', {replyMarkup:glavniy})
              break
       case '💰 Баланс':  
       bot.sendMessage(msg.from.id, 'Ваш баланс 100 рублей')
             break
             case '⚫️ Black' :
       bot.sendMessage(msg.from.id,'Вы в игре', {replyMarkup: game})
              break
  }    
         
 });

bot.start();