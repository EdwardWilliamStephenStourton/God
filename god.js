const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({ game: { name: 'Chat with God', type: 0 } });
});

client.on('message', message => {
	if(,essage.content==='ping'){
		message.reply('pong');
	}
});

client.login(process.env.BOT_TOKEN);
