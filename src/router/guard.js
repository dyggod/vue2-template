import { getLoginStatus } from './utils';
import { loginIgnore } from './routes';

export default function createRouterGuards(router) {
  router.beforeEach((to, from, next) => {
    if (getLoginStatus() === false) {
      if (loginIgnore.includes(to)) {
        next();
      } else {
        next('/login');
      }
    } else if (to.path !== '/login') {
      next();
    } else {
      next(from.path);
    }
  });

  router.onError((error) => {
    console.log(error, '路由错误');
  });
}
