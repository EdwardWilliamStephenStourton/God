const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready',()=>{
  bot.user.setPresence({ game: { name: 'Chat with God ^^', type: 0 } });
});

bot.on('message', message => {
  if(message.content==='ping'){
    message.reply('pong');
  }
});

bot.login(process.env.BOT_TOKEN);
