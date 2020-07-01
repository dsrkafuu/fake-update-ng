export default [
  {
    path: '/windows-10',
    name: 'Windows10',
    component: () => import(/* webpackChunkName: "windows-10" */ '@/views/systems/windows-10.vue'),
  },
  {
    path: '/macos-catalina',
    name: 'macOS Catalina',
    component: () => import(/* webpackChunkName: "macos-catalina" */ '@/views/systems/macos-catalina.vue'),
  },
];
