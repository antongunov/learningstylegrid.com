import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import ranks from './modules/ranks';

export const store = new Vuex.Store({
  modules: {
    ranks,
  },
});
