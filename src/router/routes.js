import { errorPage, constansRoutes } from './base';

const routeModuleList = [];

// 使用 require.context 动态加载modules目录下的路由模块
const requiredModules = require.context('./modules', false, /\.js$/);
requiredModules.keys().forEach((fileName) => {
  routeModuleList.push(...(requiredModules(fileName).default || requiredModules(fileName)));
});

export const rootRoutes = [errorPage, ...constansRoutes];

export const asyncRoutes = [...routeModuleList];

export const routes = [
  ...rootRoutes,
  ...routeModuleList,
];

// 不需要登录拦截的路由配置
// const loginIgnore = {
//   names: ['404', '403'], // 根据路由名称匹配
//   paths: ['/login'], // 根据路由fullPath匹配
//   /**
//    * 判断路由是否包含在该配置中
//    * @param route vue-router 的 route 对象
//    * @returns {boolean}
//    */
//   includes(route) {
//     return this.names.includes(route.name) || this.paths.includes(route.path);
//   },
// };
