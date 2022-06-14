import Layout from '@/layout/index.vue';

const routeName = 'dashboard';

const routes = [
  {
    path: '/dashboard',
    name: routeName,
    redirect: '/dashboard/test',
    component: Layout,
    meta: {
      title: 'Dashboard',
      icon: '',
    },
    children: [
      {
        path: '/dashboard/test',
        name: `${routeName}_test`,
        component: () => import('@/views/dashboard/test/index.vue'),
        meta: {
          icon: ''
        }
      },
      {
        path: '/dashboard/workplace',
        name: `${routeName}_workplace`,
        component: () => import('@/views/dashboard/workplace/index.vue'),
        meta: {
          icon: ''
        }
      }
    ]
  },
]

export default routes;
