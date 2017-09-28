export default {
  state: {
    ranks: [],
  },
  mutations: {
    initRanks: (state, count) => {
      let i = count;
      while (i-- > 0) {
        state.ranks.push([
          0, // CE
          0, // RO
          0, // AC
          0, // AE
        ]);
      }
    },

  },
  actions: {
    initRanks: ({commit}, count) => commit('initRanks', count),
  },
  getters: {
    ranks: state => state.ranks,
  },
}
