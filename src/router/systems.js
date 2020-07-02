export default [
  {
    path: '/windows-10',
    name: 'windows-10',
    component: () => import('@/systems/windows-10.vue'),
  },
  {
    path: '/macos',
    name: 'macos',
    component: () => import('@/systems/macos.vue'),
  },
  {
    path: '/ios',
    name: 'ios',
    component: () => import('@/systems/ios.vue'),
  },
  {
    path: '/ios-white',
    name: 'ios-white',
    component: () => import('@/systems/ios-white.vue'),
  },
];
