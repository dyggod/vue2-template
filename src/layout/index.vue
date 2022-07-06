<template>
  <a-layout id="app-layout">
    <SideMenu :collapsed="collapsed"></SideMenu>
    <a-layout class="layout-right">
      <Header :collapsed="collapsed" @toggle="toggle"></Header>
      <HeaderBread :levelList="breadcrumb"/>
      <a-layout-content class="layout-right-content">
        <div>
          <Main>
            <template #extents>
            </template>
          </Main>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from './menu/index.vue';
import Header from './header/index.vue';
import Main from './main/index.vue';
import HeaderBread from './breadcrumb/index.vue';

export default {
  name: 'LayoutPage',
  components: {
    SideMenu, Header, HeaderBread, Main,
  },
  data() {
    return {
      collapsed: false,
      levelList: [],
    };
  },
  computed: {
    breadcrumb() {
      return this.getBreadVal();
    },
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
    },
    getBreadVal() {
      const matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title,
      );
      return matched.filter(
        (item) => item.meta && item.meta.title,
      );
    },
  },
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>
