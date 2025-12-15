// Simple in-memory poll storage (no DB yet)
const polls = new Map();

module.exports = {
  create(pollId, data) {
    polls.set(pollId, data);
  },

  get(pollId) {
    return polls.get(pollId);
  },

  vote(pollId, userId, optionIndex) {
    const poll = polls.get(pollId);
    if (!poll) return false;

    if (poll.voters.has(userId)) return false;

    poll.votes[optionIndex]++;
    poll.voters.add(userId);
    return true;
  },
};