import { defineStore } from 'pinia';

const userStore = defineStore('userStore', {
  state: () => ({
    loginStatus: false,
    userInfo: {
      name: '',
      avatar: '',
    },
  }),
  actions: {
    // 登录
    login() {
      console.log('login in store');
      this.loginStatus = true;
      this.getUserInfo();
    },

    // 获取用户信息
    getUserInfo() {
      this.userInfo = {
        name: 'userName',
        avatar: '',
      };
    },
  },
});

export default userStore;
