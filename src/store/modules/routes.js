import { defineStore } from 'pinia';
import { asyncRoutes, rootRoutes } from '@/router/routes';
import { generatePermissionRoutes } from '@/utils/permission';

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
    generateRoutes(permissions) {
      const permissionRoutes = generatePermissionRoutes(asyncRoutes, permissions);
      this.setRouter(permissionRoutes);
      this.generateMenu(permissionRoutes);
      return permissionRoutes;
    },

    /**
     * 此函数处理生成页面菜单的逻辑
     * @param {*} permissionRoutes 用户拥有权限的路由
     * @returns
     */
    generateMenu(permissionRoutes) {
      this.setMenus(permissionRoutes);
      return this.menuData;
    },
  },
});

export default routesStore;
