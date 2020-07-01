export default [
  {
    path: '/windows-10',
    name: 'Windows10',
    component: () => import(/* webpackChunkName: "windows-10" */ '@/views/systems/windows-10.vue'),
  },
];
