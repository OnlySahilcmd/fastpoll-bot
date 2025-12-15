const { SlashCommandBuilder } = require('discord.js');
const create = require('./create');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('poll')
    .setDescription('FastPoll commands')
    .addSubcommand(sub =>
      sub
        .setName('create')
        .setDescription('Create a poll')
        .addStringOption(opt =>
          opt
            .setName('question')
            .setDescription('Poll question')
            .setRequired(true)
        )
        .addStringOption(opt =>
          opt
            .setName('options')
            .setDescription('Comma-separated options (2–5)')
            .setRequired(true)
        )
    ),

  async execute(interaction) {
    const sub = interaction.options.getSubcommand();
    if (sub === 'create') return create.execute(interaction);
  },
};

