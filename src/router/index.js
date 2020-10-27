import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

import systems from './systems.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tos',
    name: 'TOS',
    component: () => import(/* webpackChunkName: "tos" */ '@/views/TOS.vue'),
  },
  // All system page
  ...systems,
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
