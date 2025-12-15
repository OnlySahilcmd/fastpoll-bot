
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Bot status'),

  async execute(interaction) {
    await interaction.reply({
      content: '🟢 FastPoll is online and operational.',
      ephemeral: true,
    });
  },
};
