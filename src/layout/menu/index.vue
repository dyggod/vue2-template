<template>
  <a-layout-sider v-model="collapsedSelf" :trigger="null" collapsible class="side-menu">
    <div class="logo" />
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <a-menu-item key="1">
        <a-icon type="user" />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="video-camera" />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="upload" />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: 'SideMenu',
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    collapsedSelf() {
      return this.collapsed;
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
