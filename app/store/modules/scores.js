export default {
  state: {
    scores: [],
  },
  mutations: {
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
  },
  actions: {
    initScores: ({commit}, count) => commit('initScores', count),
  },
  getters: {
    scores: state => state.scores,
  },
}
