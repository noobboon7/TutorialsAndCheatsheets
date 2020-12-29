require('dotenv').config();

const { Client } = require('discord.js');
const bot = new Client;
const PREFIX = '$';
bot.on('ready', () =>{
  console.log(`${bot.user.tag} has logged in.`);
});

// part of banning a user 
bot.on('message', (message) => {
  console.log(`[${message.author.tag}]: ${message.content}`);
  if(message.author.bot) return
  if(message.content.startsWith(PREFIX)){
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)

  }
})

bot.login(process.env.DISCORD_JS_BOT_TKN);