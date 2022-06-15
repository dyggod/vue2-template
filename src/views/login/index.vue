<template>
  <div class="login-page">
    <a-button type="primary" @click="clickLogin">
      登录
    </a-button>
  </div>
</template>

<script>
import { pinia } from '@/store';
import userStore from '@/store/modules/user';

export default {
  name: 'LoginView',
  data() {
    return {
      store: userStore(pinia),
    };
  },
  methods: {
    clickLogin() {
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
