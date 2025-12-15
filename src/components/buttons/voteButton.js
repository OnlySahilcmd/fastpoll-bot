const pollStore = require('../../utils/pollStore');

module.exports = async (interaction) => {
  const [_, pollId, optionIndex] = interaction.customId.split('_');

  const success = pollStore.vote(
    pollId,
    interaction.user.id,
    Number(optionIndex)
  );

  if (!success) {
    return interaction.reply({
      content: '❌ You have already voted or poll expired.',
      ephemeral: true,
    });
  }

  return interaction.reply({
    content: '✅ Vote counted!',
    ephemeral: true,
  });
};
