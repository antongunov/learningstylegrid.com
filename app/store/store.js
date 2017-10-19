import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import scores from './modules/scores';

export const store = new Vuex.Store({
  modules: {
    scores,
  },
});
