import { loadRoutes } from './utils';

export default function createRouterGuards(router) {
  router.beforeEach((to, from, next) => {
    loadRoutes();
    next();
  });

  router.onError((error) => {
    console.log(error, '路由错误');
  });
}
