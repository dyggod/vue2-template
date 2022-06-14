<template>
  <a-layout id="components-layout-custom-trigger">
    <SideMenu :collapsed="collapsed"></SideMenu>
    <a-layout>
      <Header :collapsed="collapsed" @toggle="toggle"></Header>
      <a-layout-content>
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
      collapsed: true,
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
.components-layout-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
</style>
