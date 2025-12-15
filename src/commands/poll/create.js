const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require('discord.js');

const pollStore = require('../../utils/pollStore');

module.exports = {
  async execute(interaction) {
    const question = interaction.options.getString('question');
    const optionsRaw = interaction.options.getString('options');

    const options = optionsRaw.split(',').map(o => o.trim());

    if (options.length < 2 || options.length > 5) {
      return interaction.reply({
        content: '❌ Provide 2–5 options (comma separated).',
        ephemeral: true,
      });
    }

    const pollId = interaction.id;

    pollStore.create(pollId, {
      question,
      options,
      votes: Array(options.length).fill(0),
      voters: new Set(),
    });

    const embed = new EmbedBuilder()
      .setColor(0x7C5CFF)
      .setTitle(`📊 ${question}`)
      .setDescription(
        options.map((opt, i) => `**${i + 1}.** ${opt}`).join('\n')
      )
      .setFooter({ text: 'Click a button below to vote' });

    const buttons = options.map((_, i) =>
      new ButtonBuilder()
        .setCustomId(`vote_${pollId}_${i}`)
        .setLabel(`${i + 1}`)
        .setStyle(ButtonStyle.Primary)
    );

    const row = new ActionRowBuilder().addComponents(buttons);

    await interaction.reply({
      embeds: [embed],
      components: [row],
    });
  },
};