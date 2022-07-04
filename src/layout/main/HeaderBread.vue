<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(breaditem, key) in levelList" :key="key">
        {{ breaditem.meta.title }}
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    levelList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less" scoped>
</style>
