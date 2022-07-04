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
import { userService, RES_CODE } from '@/api/index';

export default {
  name: 'LoginView',
  data() {
    return {
      store: userStore(pinia),
    };
  },
  methods: {
    clickLogin() {
      userService.login('admin', 'admin').then((res) => {
        const { data } = res;
        if (res.code === RES_CODE.SUCCESS) {
          this.store.login(data.token);
          this.$router.push({
            path: '/home',
          });
        }
      }).catch((error) => {
        this.$message.error(error.message);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login-page {
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  place-content: center center;
}
</style>
