<template>
  <a-config-provider :locale="locale" :get-popup-container="popContainer">
    <router-view />
  </a-config-provider>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      locale: {
        'zh-CN': {
          title: 'Ant Design',
          description: '基于 Ant Design 的 Vue 组件库',
        },
        'en-US': {
          title: 'Ant Design',
          description: 'Ant Design is a design language and UI framework for React.',
        },
      },
    };
  },
  methods: {
    popContainer() {
      return document.getElementById('popContainer');
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
