import { defineStore } from 'pinia';
import { userService } from '@/api';
import { getToken, setToken, removeToken } from '@/utils/local-storage';

const userStore = defineStore('userStore', {
  state: () => ({
    loginStatus: !!getToken(),
    userInfo: {
      id: -1,
      username: '',
      nickName: '',
      roleName: '',
      createTime: '',
    },
    permissions: [],
  }),
  getters: {
    getPermissions() {
      return this.permissions;
    },
  },
  actions: {
    // 初始化用户信息
    async initAuth() {
      const token = getToken();
      if (token) {
        await this.login(token);
      }
    },

    // 登录
    async login(token) {
      setToken(token);
      this.loginStatus = true;
      await this.getUserInfo();
    },

    // 获取用户信息
    async getUserInfo() {
      try {
        const { user, permissions } = (await userService.getUserInfo()).data;
        this.userInfo = user;
        this.permissions = permissions;
        return { user, permissions };
      } catch (error) {
        // 即使获取用户信息接口失败，也要继续进行路由加载
        this.permissions = [];
        return { user: this.userInfo, permissions: this.permissions };
      }
    },

    // 退出登录
    logout() {
      this.loginStatus = false;
      this.userInfo = {
        id: -1,
        username: '',
        nickName: '',
        roleName: '',
        createTime: '',
      };
      removeToken();
    },
  },
});

export default userStore;
