const { Client, Intents } = require('discord.js');
const moment = require('moment');
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  setInterval(() => {
      let dayInterval = moment([2022, 4, 17]).diff(moment(), 'days');
      let weekInterval = (dayInterval-(dayInterval%7))/7;
      client.user.setActivity(`UTBK, ${weekInterval} weeks left`, {type: "WATCHING"});
  }, 10000)
});

client.login(process.env.API_TOKEN);