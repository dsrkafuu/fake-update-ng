import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import ls from '@/assets/packages/local_storage.js';

export default new Vuex.Store({
  state: {
    locale: ls.get('fake-update_locale') || 'en_us',
  },
  actions: {
    changeLocale(context, locale) {
      context.commit('changeLocale', locale);
    },
  },
  mutations: {
    changeLocale(state, locale) {
      state.locale = locale;
      ls.set('fake-update_locale', locale);
    },
  },
});
