import Vue from 'vue';
import VueRouter from 'vue-router';
import createRouterGuards from './guard';
import { loadRoutes } from './utils';
import { routes } from './routes';

/*
 * 以下四行代码是为了解决vue-route进入当前所在组件时报错问题：
 * Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location
 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

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

const router = new VueRouter({
  routes,
});

export function setupRouter() {
  // 加载路由
  loadRoutes();
  // 创建路由守卫
  createRouterGuards(router);
}

export default router;
