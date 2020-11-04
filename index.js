const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
  client.user.setActivity(` !help | Serving ${client.guilds.cache.size} servers`, { type: 'LISTENING' });
});

client.on("message", async message => {

      /*Ignores messages from other bots*/ 
        if (message.author.bot) return;

     const args = message.content.slice(prefix.length).split(' ');
     const command = args.shift().toLowerCase();

	if (message.content === '!ping') {
	    message.channel.send('Pong.');
	}
  
  if(command === 'searchweb') {
  /*if there are no arguments provided*/ 
    if (!args.length) {
      return message.reply('Please enter a search (ie: `!searchweb how to make pancakes`)');
    }
   /*if there is a space in search add a '+' to the URL*/ 
    const webargs = message.content.slice(10).trim().split(' ').join('+');
    const url = `https://www.google.com/search?q=${webargs}`
    message.channel.send(`Here is your web search result: \n \n ${url}`)
  }

  if(command === 'searchyt') {
  /*if there are no arguments provided*/ 
    if (!args.length) {
      return message.reply('Please enter a search (ie: `!searchyt MrBeast`)');
    }
    /*if there is a space in search add a '+' to the URL*/ 
    const ytargs = message.content.slice(9).trim().split(' ').join('+');
    const url = `https://www.youtube.com/results?search_query=${ytargs}`
    message.channel.send(`Here is your youtube search result: \n \n ${url}`)
  }
  
});

/*Made By K.K Designs 🙂*/
client.login('your-token-goes-here');
