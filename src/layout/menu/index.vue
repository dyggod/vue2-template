<template>
  <a-layout-sider v-model="collapsedSelf" :trigger="null" collapsible class="side-menu">
    <div class="logo" />
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <a-menu-item v-for="(item, i) in menus" :key="i">
        <a-icon type="user" />
        <span>{{ item.name }}</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { mapState } from 'pinia';
import store from '@/store/modules/index';

export default {
  name: 'SideMenu',
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menus: [],
    };
  },
  computed: {
    ...mapState(store.routesStore, ['getMenus']),
    collapsedSelf() {
      return this.collapsed;
    },
  },
  created() {
    this.menus = this.getMenus;
    console.log('this.menus: ', this.menus);
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
