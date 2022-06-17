<template>
  <a-dropdown>
    <div class="header-avatar" style="cursor: pointer">
      <a-avatar class="avatar" size="small" shape="circle" icon="user"/>
      <span class="name">{{userInfo.name}}</span>
    </div>
    <a-menu :class="['avatar-menu']" slot="overlay">
      <a-menu-item>
        <a-icon type="user" />
        <span>个人中心</span>
      </a-menu-item>
      <a-menu-item>
        <a-icon type="setting" />
        <span>设置</span>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item @click="clickLogout">
        <a-icon style="margin-right: 8px;" type="poweroff" />
        <span>退出登录</span>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import store from '@store/modules/index';

export default {
  name: 'HeaderAvatar',
  computed: {
    ...mapState(store.userStore, ['userInfo']),
  },
  methods: {
    ...mapActions(store.userStore, ['logout']),
    clickLogout() {
      this.logout();
    },
  },
};
</script>

<style lang="less" scoped>
.header-avatar {
  display: inline-flex;
  .avatar, .name {
    align-self: center;
  }
  .avatar {
    margin-right: 8px;
    background: @primary-color;
  }
  .name {
    font-weight: 500;
  }
}

.avatar-menu {
  width: 150px;
}
</style>
