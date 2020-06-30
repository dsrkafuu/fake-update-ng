import Vue from 'vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueI18n);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
