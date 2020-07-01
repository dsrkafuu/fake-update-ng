import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import ls from '@/assets/packages/local_storage.js';
import _ from '@/default.js';

export default new Vuex.Store({
  state: {
    locale: ls.get('fake-update-locale') || _.locale,
    timer: ls.get('fake-update-timer') || _.timer,
  },
  actions: {},
  mutations: {
    changeLocale(state, locale) {
      state.locale = locale;
      ls.set('fake-update-locale', locale);
    },
    changeTimer(state, timer) {
      state.timer = timer;
      ls.set('fake-update-timer', timer);
    },
  },
});
