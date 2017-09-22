import Vue from 'vue';
import App from './App.vue';

import { router } from './router'
import { store } from './store'

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
});
