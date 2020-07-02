export default [
  {
    path: '/windows-10',
    name: 'Windows10',
    component: () => import(/* webpackChunkName: "windows-10" */ '@/systems/windows-10.vue'),
  },
  {
    path: '/macos',
    name: 'macOS',
    component: () => import(/* webpackChunkName: "macos" */ '@/systems/macos.vue'),
  },
];
