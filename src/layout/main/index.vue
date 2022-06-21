<template>
  <router-view class="layout-main">
    <template #default="{ Component, route }">
      <transition>
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </template>
  </router-view>
</template>

<script>
export default {
  name: 'LayoutMain',
};
</script>

<style lang="less" scoped>
</style>
