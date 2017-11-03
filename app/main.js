import promise from 'es6-promise';

promise.polyfill();

import Vue from 'vue';
import App from './App.vue';

import { router } from './router/router';
import { store } from './store/store';

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
});
