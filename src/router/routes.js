import { errorPage, constansRoutes } from './base';

const routeModuleList = [];

// 使用 require.context 动态加载modules目录下的路由模块
const requiredModules = require.context('./modules', false, /\.js$/);
requiredModules.keys().forEach((fileName) => {
  routeModuleList.push(...(requiredModules(fileName).default || requiredModules(fileName)));
});

// 路由按照 meta.sort 排序
function sortRoute(a, b) {
  return (a.meta?.sort || 0) - (b.meta?.sort || 0);
}
routeModuleList.forEach((route) => {
  route?.children.sort(sortRoute);
});
routeModuleList.sort(sortRoute);

export const rootRoutes = [errorPage, ...constansRoutes];

export const asyncRoutes = [...routeModuleList];

export const routes = [
  ...rootRoutes,
  ...routeModuleList,
];

// 不需要登录拦截的路由配置
export const loginIgnore = {
  names: ['404'], // 根据路由名称匹配
  paths: ['/login', '*'], // 根据路由fullPath匹配
  /**
   * 判断路由是否包含在该配置中
   * @param route vue-router 的 route 对象
   * @returns {boolean}
   */
  includes(route) {
    return this.paths.includes(route.path);
  },
};
