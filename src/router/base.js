import Layout from '@/layout/index.vue';

export const errorPage = {
  path: '*',
  name: '404',
  component: () => import('@/views/404/index.vue'),
};

export const constansRoutes = [
  {
    path: '/login',
    name: '登录页',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'root',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Layout,
    redirect: '/home/index',
    children: [
      {
        path: '/home/index',
        name: 'home_index',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
        },
      },
    ],
  },
];
