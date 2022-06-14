import { loadRoutes } from './utils';

export default function createRouterGuards(router) {
  router.beforeEach((to, from, next) => {
    console.log('next: ', next);
    console.log('from: ', from);
    console.log('to: ', to);
    loadRoutes();
    next();
  });
}
