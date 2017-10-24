const state = {
  scores: [],
};

const mutations = {
  initScores: (state, count) => {
    // prevent repetitive init
    if (state.scores.length > 0) return;
    // init
    let i = count;
    while (i-- > 0) state.scores.push({
      CE: 0, // Concrete Experience
      RO: 0, // Reflective Observation
      AC: 0, // Abstract Conceptualization
      AE: 0, // Active Experimentation
    });
  },
  updateScores: (state, { sentenceNumber, sentenceScores }) => {
    state.scores.splice(sentenceNumber - 1, 1, Object.assign({}, sentenceScores));
  },
};

const actions = {
  initScores: ({commit}, count) => commit('initScores', count),
  updateScores: ({commit}, sentence) => commit('updateScores', sentence),
};

const getters = {
  sentenceScores: state => sentenceNumber => state.scores[sentenceNumber - 1],
  totalScores: (state) => {
    return state.scores.reduce((totals, sentenceScores) => {
      totals.CE += sentenceScores.CE;
      totals.RO += sentenceScores.RO;
      totals.AC += sentenceScores.AC;
      totals.AE += sentenceScores.AE;
      return totals;
    }, { CE: 0, RO: 0, AC: 0, AE: 0 });
  },
  countScores: state => state.scores.length,
};

export default {
  state,
  mutations,
  actions,
  getters
};
