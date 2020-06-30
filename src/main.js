import Vue from 'vue';
import router from './router';
import store from './store';
Vue.config.productionTip = false;

import VueI18n from 'vue-i18n';
// Use Vue I18n Plugin
Vue.use(VueI18n);
// Import locales data
import localeIndex from '@/assets/locales/index.js';
// Init i18n instance
const i18n = new VueI18n({
  locale: 'en_us',
  fallbackLocale: 'en_us',
  messages: localeIndex,
});

import App from './App.vue';

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
