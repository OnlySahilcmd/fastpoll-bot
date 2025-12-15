
const { REST, Routes } = require('discord.js');
const { token, clientId } = require('./config/env');

const poll = require('./commands/poll/poll');
const about = require('./commands/system/about');
const status = require('./commands/system/status');
const privacy = require('./commands/system/privacy');
const permissions = require('./commands/system/permissions');
const premium = require('./commands/premium/premium');

const commands = [
  poll.data.toJSON(),
  about.data.toJSON(),
  status.data.toJSON(),
  privacy.data.toJSON(),
  permissions.data.toJSON(),
  premium.data.toJSON(),
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  console.log('⏳ Deploying global slash commands...');
  await rest.put(Routes.applicationCommands(clientId), { body: commands });
  console.log('✅ Slash commands deployed successfully');
})();
