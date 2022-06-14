<template>
  <a-layout-header style="background: #fff; padding: 0">
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

<style></style>
