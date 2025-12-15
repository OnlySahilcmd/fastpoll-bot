const fs = require('fs');
const path = require('path');

module.exports = (client) => {
  const commandsPath = path.join(__dirname, '../commands');

  // Load only PARENT slash commands (files with command.data)
  for (const folder of fs.readdirSync(commandsPath)) {
    const folderPath = path.join(commandsPath, folder);

    for (const file of fs.readdirSync(folderPath)) {
      const filePath = path.join(folderPath, file);
      const command = require(filePath);

      // ✅ SAFETY CHECK (IMPORTANT)
      if (!command.data || !command.execute) continue;

      client.commands.set(command.data.name, command);
    }
  }

  // Interaction handler
  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: '❌ Something went wrong.',
        ephemeral: true,
      });
    }
  });
};