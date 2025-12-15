
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config/env');
const commandHandler = require('./handlers/commandHandler');

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId.startsWith('vote_')) {
    require('./components/buttons/voteButton')(interaction);
  }
});


client.commands = new Collection();

commandHandler(client);

client.once('ready', () => {
  console.log(`⚡ FastPoll online as ${client.user.tag}`);
});

client.login(token);
