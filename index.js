require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.author.username === 'PokéMeow' &&  msg.embeds[0] &&  msg.embeds[0].title &&  msg.embeds[0].title.includes("hatched")){
    console.info("CONTENT :" + msg.content);
    console.info("embed :" + JSON.stringify(msg.embeds[0]));
    // let title = msg.embeds[0].title;
    // title = title.replace(/<.*>/, '');
    // const myEmbed = new Discord.MessageEmbed()
    // .setColor(msg.embeds[0].color)
    // .setImage(msg.embeds[0].image.url)
    // .setDescription(title);
    // bot.channels.cache.get('764227765234565130').send(myEmbed);
  }
  if (msg.author.username === 'PokéMeow' &&  msg.embeds[0] &&  msg.embeds[0].description &&  msg.embeds[0].description.includes("from a swap") &&  (msg.embeds[0].description.includes("Shiny") || msg.embeds[0].description.includes("Legendary") || msg.embeds[0].description.includes("Golden"))){
    let desc = msg.embeds[0].description;
    desc = desc.replace(/<.*>/, '');
    const myEmbed = new Discord.MessageEmbed()
    .setColor(msg.embeds[0].color)
    .setImage(msg.embeds[0].image.url)
    .setDescription(desc);
    console.info("embed :" + JSON.stringify(msg.embeds[0]));
    bot.channels.cache.get('764227765234565130').send(myEmbed);
  }
  if (msg.author.username === 'PokéMeow' && msg.embeds[0] && msg.embeds[0].author.name === 'A wild Pokémon appeared!') {
    let footer = msg.embeds[0].footer.text;
    footer = footer.split('\n')[0];
    if (footer.includes('Golden') || footer.includes('Legendary') || footer.includes('Shiny')) {
      let desc = msg.embeds[0].description;
      if (footer.includes('Shiny')) {
        desc = desc.substr(desc.indexOf(" ") + 1);
        desc = desc.replace(/<.*>/, '');
        console.info("my Desc shiny : " + desc);
      } else {
        desc = desc.replace(/<.*>/, '');
        console.info("my Desc legend : " + desc);
        if (footer.includes('Legendary')) {
          console.info("THE LEGENDARY COLOR: " + msg.embeds[0].color);
        }
      }
      const myEmbed = new Discord.MessageEmbed()
        .setColor(msg.embeds[0].color)
        .setImage(msg.embeds[0].image.url)
        .setFooter(footer)
        .setDescription(desc);
      console.log("The actual embed :" + msg.embeds[0]);
      console.log("my Desc : " + desc);
      //comment
      bot.channels.cache.get('764227765234565130').send(myEmbed);
    }
  }
});

bot.on('messageUpdate', async (oldMessage, newMessage) => {
  if (newMessage.author.username === 'PokéMeow' && newMessage.embeds[0].description.includes('fished out') && newMessage.embeds[0].image.height === 0) {
    if (newMessage.embeds[0].title.includes('special') || newMessage.embeds[0].description.includes('Shiny') || newMessage.embeds[0].description.includes('Kyogre') || newMessage.embeds[0].description.includes('Suicune')) {
      let desc = newMessage.embeds[0].description;
      desc = desc.replace(/<.*>/, '');
      const myEmbed = new Discord.MessageEmbed()
        .setTitle('A special Pokemon was found in the waters!')
        .setColor(newMessage.embeds[0].color)
        .setImage(newMessage.embeds[0].image.url)
        .setDescription(desc);
      bot.channels.cache.get('764227765234565130').send(myEmbed);
    }
  }
});
