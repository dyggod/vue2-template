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
export async function loadRoutes(router) {
  const { store } = appOptions;
  const userStore = store.userStore(pinia);
  const routesStore = store.routesStore(pinia);
  const data = await userStore.getUserInfo();
  const asyncRoutes = routesStore.generateRoutes(data.permissions);
  asyncRoutes.forEach((element) => {
    router.addRoute(element);
  });
}

// 获取store登录状态
export function getLoginStatus() {
  const { store } = appOptions;
  const userStore = store.userStore(pinia);
  return userStore.loginStatus;
}

// 获取store 用户权限
export function getPermissions() {
  const { store } = appOptions;
  const userStore = store.userStore(pinia);
  return userStore.getPermissions;
}

export function isHaveMenu() {
  const { store } = appOptions;
  const routesStore = store.routesStore(pinia);
  return routesStore.menuData.length > 0;
}

// 初始化权限状态
export async function initAuth() {
  const { store } = appOptions;
  const userStore = store.userStore(pinia);
  return userStore.initAuth();
}
