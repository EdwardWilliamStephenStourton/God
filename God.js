const Discord = require('discord.js');
const bot = new Discord.Client();

function bot_response(var param){
  var rnd = Math.floor(Math.random()*4)+1;
  if(param.indexOf(Hello)!==-1||param.indexOf(Hi)!==-1||param.indexOf(Morning)!==-1||param.indexOf(Afternoon)!==-1||param.indexOf(Evening)!==-1||param.indexOf(Hey)!==-1){
    switch(rnd){
      case 1:channel.send('Hello, how are you doing?');break;
      case 2:channel.send('Hey, what a lovely day?');break;
      case 3:channel.send('Welcome, oh Master!');break;
      case 4:channel.send('Booting up bullshit generator.');break;
      default:channel.send('Cyber messed me up, someone fix me! Right naow!');
    }
  }
  return 0;
}

bot.on('ready',()=>{
  bot.user.setPresence({ game: { name: 'Chat with God ^^', type: 0 } });
});

bot.on('message', message => {
  let channel = bot.channels.get('372811432636710913');
  var keyword = 'God';
  var user_command = message.content;
  if(user_command.indexOf(keyword)!==-1){
    bot_response(user_command);
  }
});

bot.login(process.env.BOT_TOKEN);
