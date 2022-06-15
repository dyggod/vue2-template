import { pinia } from '@/store';
// 应用配置
const appOptions = {
  router: undefined,
  i18n: undefined,
  store: undefined,
};

/**
 * 设置应用配置
 * @param options
 */
export function setAppOptions(options) {
  const { router, store, i18n } = options;
  appOptions.router = router;
  appOptions.store = store;
  appOptions.i18n = i18n;
}

// 加载路由
export function loadRoutes() {
  const { store } = appOptions;
  const routesStore = store.routesStore(pinia);
  routesStore.generateRoutes();
}

// 获取store登录状态
export function getLoginStatus() {
  const { store } = appOptions;
  const userStore = store.userStore(pinia);
  return userStore.loginStatus;
}

export function loadRoutesWidthOut(appRouter) {
  console.log('appRouter: ', appRouter);
}

export function createRouterGuards(router) {
  router.beforEach((to, from, next) => {
    console.log('next: ', next);
    console.log('from: ', from);
    console.log('to: ', to);
  });
}
