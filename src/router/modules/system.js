import Layout from '@/layout/index.vue';

const routeName = 'system';

const routes = [
  {
    path: '/system',
    name: routeName,
    redirect: '/system/test',
    component: Layout,
    meta: {
      title: '系统设置',
      icon: 'setting',
      sort: 1,
      permission: ['system:view'],
    },
    children: [
      {
        path: '/system/about',
        name: `${routeName}_test`,
        component: () => import('@/views/AboutView.vue'),
        meta: {
          title: '测试',
          icon: '',
        },
      },
      {
        path: '/system/workplace',
        name: `${routeName}_workplace`,
        component: () => import('#/HelloWorld.vue'),
        meta: {
          title: '工作台',
          icon: '',
        },
      },
    ],
  },
];

export default routes;
