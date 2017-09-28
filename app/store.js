import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import sentences from './sentences.json';

export const store = new Vuex.Store({
  state: {
    sentences,
  },
});
