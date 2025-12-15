
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('privacy')
    .setDescription('Privacy policy'),

  async execute(interaction) {
    await interaction.reply({
      content: '🔐 FastPoll does not read messages or store personal data.',
      ephemeral: true,
    });
  },
};
