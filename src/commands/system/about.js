
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('about')
    .setDescription('About FastPoll'),

  async execute(interaction) {
    await interaction.reply({
      content: '⚡ FastPoll — Vote faster. Decide smarter.',
      ephemeral: true,
    });
  },
};
