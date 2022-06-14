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
    redirect: '/dashboard/test',
  },
];
