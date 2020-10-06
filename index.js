require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {

  console.log(msg.author.username);
  if (msg.author.username === 'PokéMeow' && msg.embeds[0] && msg.embeds[0].author.name === 'A wild Pokémon appeared!') {
    console.log(msg.embeds[0]);
    let footer = msg.embeds[0].footer.text;
    footer = footer.split('\n')[0];
    if (footer.includes('Rare') || footer.includes('Legendary') || footer.includes('Shiny')) {
      let desc = msg.embeds[0].description;
      //desc = desc.replace(/:.*:/, '');
      desc = desc.replace(/<.*>/, '');
      const myEmbed = new Discord.MessageEmbed()
        .setColor(msg.embeds[0].color)
        .setImage(msg.embeds[0].image.url)
        .setFooter(footer)
        .setDescription(desc);
      //msg.channel.send(myEmbed);
      bot.channels.cache.get('761584846836596796').send(myEmbed);

    }
  }
});
