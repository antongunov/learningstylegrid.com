const state = {
  sentences: [],
};

const mutations = {
  initSentences: (state, sentences) => state.sentences = sentences,
};

const actions = {
  initSentences: ({ commit }, sentences) => commit('initSentences', sentences),
};

const getters = {
  sentence: state => number => state.sentences[number - 1],
  sentenceCount: state => state.sentences.length,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
