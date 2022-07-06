<template>
<div>
  <slot name="extents"></slot>
  <router-view class="layout-main">
    <template #default="{ Component, route }">
      <transition>
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </template>
  </router-view>
</div>
</template>

<script>

export default {
  name: 'LayoutMain',
};
</script>

<style lang="less" scoped>
</style>
