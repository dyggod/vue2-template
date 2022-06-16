<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>
      <a-button @click="login">登录</a-button>
    </h1>
    <h1 v-if="loginStatus">{{ userInfo.name }}登录了</h1>
    <h1>
      <a-button @click="setLanguage()">切换语言</a-button>
    </h1>
    <h1>现在语言是: {{ language }}</h1>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import store from '@/store/modules/index';

export default {
  name: 'AboutView',
  data() {
    return {
      message: 'Hello World',
    };
  },
  computed: {
    ...mapState(store.userStore, ['loginStatus', 'userInfo']),
    ...mapState(store.settingsStore, ['language']),
  },
  methods: {
    ...mapActions(store.userStore, ['login']),
    ...mapActions(store.settingsStore, ['changeLanguage']),

    setLanguage() {
      this.language === 'zh-CN' ? this.changeLanguage('en-US') : this.changeLanguage('zh-CN');
    },
  },
};
</script>
