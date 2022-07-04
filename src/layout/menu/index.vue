<template>
  <a-layout-sider
    v-model="collapsedSelf"
    :trigger="null"
    collapsible
    class="side-menu"
    width="256"
  >
    <div :class="['logo']">
      <router-link to="/dashboard/workplace">
        <img src="@/assets/image/logo@4x.png" alt="">
        <h1>{{$t('menu.systemName')}}</h1>
      </router-link>
    </div>
    <a-menu theme="dark" mode="inline" :default-selected-keys="['0']">
      <a-menu-item key="0" @click="$router.push('/')">
        <a-icon type="home" />
        <span>首页</span>
      </a-menu-item>
      <a-sub-menu v-for="(item, i) in menus" :key="String(i + 1)">
        <template slot="title">
          <a-icon :type="item.meta.icon || 'setting'" />
          <span>{{ item.meta.title || '' }}</span>
        </template>
        <a-menu-item
          v-for="(it, k) in item.children"
          :key="i + '_' +  k"
          @click="goTargetMenu(it)">
          <span>{{ it.meta.title || '' }}</span>
        </a-menu-item>
      </a-sub-menu>
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
  },
  methods: {
    goTargetMenu(item) {
      this.$router.push({
        path: item.path,
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
