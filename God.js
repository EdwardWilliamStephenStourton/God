const Discord = require('discord.js');
const bot = new Discord.Client();

function bot_response(var param){
  if(param.indexOf(Hello)!==-1||param.indexOf(Hi)!==-1||param.indexOf(Morning)!==-1||param.indexOf(Afternoon)!==-1||param.indexOf(Evening)!==-1||param.indexOf(Hey)!==-1){
    channel.send('Welcome, oh Master!');
  }
  return 0;
}

bot.on('ready', () => {
  bot.user.setPresence({ game: { name: 'Chat with God ^^', type: 0 } });
});

bot.on('message', message => {
  let channel = bot.channels.get('372811432636710913');
  var keyword = 'God';
  var user_command = message.content;
  if(user_command.indexOf(keyword)!==-1){
    //bot_response(user_command);
    channel.send('I am working fam!');
  }
});

bot.login(process.env.BOT_TOKEN);
