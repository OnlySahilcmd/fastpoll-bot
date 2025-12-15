
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('permissions')
    .setDescription('Bot permissions'),

  async execute(interaction) {
    await interaction.reply({
      content: 'FastPoll uses only minimal permissions required to function.',
      ephemeral: true,
    });
  },
};
