<template>
  <a-config-provider :locale="locale" :get-popup-container="popContainer">
    <router-view />
  </a-config-provider>
</template>
<script>
import { pinia } from '@store';
import settingsStore from '@/store/modules/settings';
import userStore from '@/store/modules/user';

export default {
  name: 'App',
  data() {
    return {
      locale: {},
      store: settingsStore(pinia),
      userStore: userStore(pinia),
    };
  },
  computed: {
    language() {
      return this.store.language;
    },
    loginStatus() {
      return this.userStore.loginStatus;
    },
  },
  methods: {
    popContainer() {
      return document.getElementById('popContainer');
    },
  },
  watch: {
    // 监听 language 变化，并设置 i18n locale和 antd 全局配置
    language(language) {
      this.$i18n.locale = language;
      switch (language) {
        case 'en-US':
          // eslint-disable-next-line global-require
          this.locale = require('ant-design-vue/es/locale-provider/en_US').default;
          break;
        default:
          // eslint-disable-next-line global-require
          this.locale = require('ant-design-vue/es/locale-provider/zh_CN').default;
          break;
      }
    },
    // 监听 loginStatus 变化
    loginStatus(loginStatus) {
      if (loginStatus) {
        this.$message.success('登录成功');
      } else {
        this.$message.error(this.$t('app.logout.msg'));
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
