import Layout from '@/layout/index.vue';

const routeName = 'dashboard';

const routes = [
  {
    path: '/dashboard',
    name: routeName,
    redirect: '/dashboard/test',
    component: Layout,
    meta: {
      title: '看板',
      icon: 'dashboard',
      sort: 0,
      permission: ['dashboard:view'],
    },
    children: [
      {
        path: '/dashboard/test',
        name: `${routeName}_test`,
        component: () => import('@/views/dashboard/test/index.vue'),
        meta: {
          title: '测试',
          icon: '',
          sort: 1,
        },
      },
      {
        path: '/dashboard/workplace',
        name: `${routeName}_workplace`,
        component: () => import('@/views/dashboard/workplace/index.vue'),
        meta: {
          title: '工作台',
          icon: '',
          sort: 0,
        },
      },
    ],
  },
];

export default routes;
