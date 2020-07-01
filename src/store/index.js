import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import ls from '@/assets/packages/local_storage.js';
import _ from '@/default.js';

export default new Vuex.Store({
  state: {
    locale: ls.get('fake-update_locale') || _.locale,
    system: ls.get('fake-update_system') || _.system,
    timer: ls.get('fake-update_timer') || _.timer,
  },
  actions: {},
  mutations: {
    changeLocale(state, locale) {
      state.locale = locale;
      ls.set('fake-update_locale', locale);
    },
    changeSystem(state, system) {
      state.system = system;
      ls.set('fake-update_system', system);
    },
    changeTimer(state, timer) {
      state.timer = timer;
      ls.set('fake-update_timer', timer);
    },
  },
});
