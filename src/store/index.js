import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import ls from '@/assets/packages/local-storage.js';
import _ from '@/default.js';

export default new Vuex.Store({
  state: {
    system: ls.get('fake-update-system') || _.system,
    locale: ls.get('fake-update-locale') || _.locale,
    timer: Number.parseInt(ls.get('fake-update-timer')) || _.timer,
  },
  actions: {},
  mutations: {
    changeSystem(state, system) {
      state.system = system;
      ls.set('fake-update-system', system);
    },
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
