/** Vue.js */
import Vue from 'vue';
import router from './router';
import store from './store';
Vue.config.productionTip = false;

/** Vue I18n */
import VueI18n from 'vue-i18n';
// Use Vue I18n Plugin
Vue.use(VueI18n);
// Import locales data
import homeLocale from './locales/home.js';
// Init i18n instance
const i18n = new VueI18n({
  locale: 'en-us',
  fallbackLocale: 'en-us',
  messages: homeLocale,
});

/** normalize.css */
import 'normalize.css';

/** Project entry */
import App from './App.vue';

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
