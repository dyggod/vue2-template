import {
  getLoginStatus, loadRoutes, isHaveMenu,
} from './utils';
import { loginIgnore } from './routes';

export default function createRouterGuards(router) {
  router.beforeEach(async (to, from, next) => {
    if (getLoginStatus() === false) {
      if (loginIgnore.includes(to)) {
        next();
      } else {
        next('/login');
      }
    } else if (to.path !== '/login') {
      if (isHaveMenu()) {
        next();
      } else {
        await loadRoutes(router);
        next(to.path);
      }
      next();
    } else {
      next(from.path);
    }
  });

  router.onError((error) => {
    throw new Error(`路由错误：${error}`);
  });
}
