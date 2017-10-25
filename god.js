const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({ game: { name: 'Chat with God', type: 0 } });
});

client.on('message', message => {
  let channel = bot.channels.get('372811432636710913');
	var keyword = 'God';
  var user_command=message.content;
  if(user_command.indexOf(keyword)!==-1){
    channel.send("I'm in business bitches!");
  }
});

client.login(process.env.BOT_TOKEN);
