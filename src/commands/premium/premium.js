
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('premium')
    .setDescription('Premium features'),

  async execute(interaction) {
    await interaction.reply({
      content: '💎 Premium features coming soon.',
      ephemeral: true,
    });
  },
};
