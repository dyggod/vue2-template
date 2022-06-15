<template>
  <a-layout id="app-layout">
    <SideMenu :collapsed="collapsed"></SideMenu>
    <a-layout class="layout-right">
      <Header :collapsed="collapsed" @toggle="toggle"></Header>
      <a-layout-content class="layout-right-content">
        <div>
          <Main></Main>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from './menu/index.vue';
import Header from './header/index.vue';
import Main from './main/index.vue';

export default {
  name: 'LayoutPage',
  components: { SideMenu, Header, Main },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style lang="less" scoped>
  @pd-left: 16px;

  .layout-right {
    // padding-left: 16px;
  }

  .layout-right-content {
    padding-left: @pd-left;
  }
</style>
