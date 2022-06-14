import { defineStore } from 'pinia';
import { asyncRoutes, rootRoutes } from '@/router/routes';

const routesStore = defineStore('routesStore', {
  state: () => ({
    menuData: [],
    router: [],
  }),
  getters: {
    getMenus() {
      return this.menuData;
    },
  },
  actions: {
    setMenus(menu) {
      this.menuData = menu;
    },

    setRouter(router) {
      this.router = router.concat(rootRoutes);
    },

    /**
     * 此函数处理生成路由的逻辑
     * @param {*} someData 暂未确定的参数，可能是用户的信息
     */
    generateRoutes(someData) {
      console.log('someData: ', someData);
      this.setMenus(asyncRoutes);
      this.setRouter(asyncRoutes);
      return asyncRoutes;
    },
  },
});

export default routesStore;
