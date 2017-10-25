import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import scores from './modules/scores';
import sentences from './modules/sentences';

export const store = new Vuex.Store({
  modules: {
    scores,
    sentences,
  },
});
