const state = {
  scores: [],
};

const mutations = {
  initScores: (state, sentenceCount) => {
    // prevent repetitive init
    if (state.scores.length > 0) return;
    // init
    let i = sentenceCount;
    while (i-- > 0) state.scores.push({ CE: 0, RO: 0, AC: 0, AE: 0 });
  },
  updateScores: (state, { number, scores }) => {
    state.scores.splice(number - 1, 1, { ...scores });
  },
};

const actions = {
  initScores: ({ commit }, count) => commit('initScores', count),
  updateScores: ({ commit }, sentence) => commit('updateScores', sentence),
};

const getters = {
  sentenceScores: state => sentenceNumber => state.scores[sentenceNumber - 1],
  scoreTotal: (state) => {
    return state.scores.reduce((total, sentenceScores) => {
      total.CE += sentenceScores.CE;
      total.RO += sentenceScores.RO;
      total.AC += sentenceScores.AC;
      total.AE += sentenceScores.AE;
      return total;
    }, { CE: 0, RO: 0, AC: 0, AE: 0 });
  },
  scoreSum: (state) => {
    return state.scores.reduce((sum, { CE, RO, AC, AE }) => {
      return sum += (CE + RO + AC + AE);
    }, 0);
  },
  // = sentenceCount
  scoreCount: state => state.scores.length,
};

export default {
  state,
  mutations,
  actions,
  getters
};
