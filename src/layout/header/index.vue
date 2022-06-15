<template>
  <a-layout-header class="layout-right-header">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="toggleCollapsed"
    />
  </a-layout-header>
</template>

<script>
export default {
  name: 'LayoutHeader',
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleCollapsed() {
      this.$emit('toggle');
    },
  },
};
</script>

<style lang="less" scoped>
.layout-right-header {
  background-color: #fff;
  padding-left: 16px;
}
</style>
