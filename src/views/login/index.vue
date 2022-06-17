<template>
  <div class="login-page">
    <a-button type="primary" @click="clickLogin">
      登录
      <div @click="clickLogin">12321</div>
    </a-button>
  </div>
</template>

<script>
import { pinia } from '@/store';
import userStore from '@/store/modules/user';
import { userService } from '@/api/index';

export default {
  name: 'LoginView',
  data() {
    return {
      store: userStore(pinia),
    };
  },
  methods: {
    clickLogin() {
      userService.login({
        username: 'admin',
        password: 'admin',
      }).then((res) => {
        console.log('res: ', res);
      }).catch((error) => {
        console.log('error: ', error);
      });
      this.store.login();
      this.$router.push({
        path: '/dashboard',
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login-page {
  text-align: center;
  margin-top: 100px;
}
</style>
