const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready',()=>{
  bot.user.setPresence({ game: { name: 'Chat with God ^^', type: 0 } });
});

bot.on('message', message => {
  let channel = bot.channels.get('372811432636710913');
  var keyword = 'God';
  var user_command = message.content;
  if(user_command.indexOf(keyword)!==-1){
    channel.send('It is working fam.');
  }
});

bot.login(process.env.BOT_TOKEN);
