<template>
  <a-layout-header id="layout-header" class="layout-right-header">
    <div>
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="toggleCollapsed"
      />
    </div>
    <div>
      <!-- 国际化选项 -->
      <div>
        <a-dropdown class="lang header-item">
          <div>
            <a-icon type="global"/> {{ langAlias }}
          </div>
          <a-menu @click="val => setLang(val.key)" :selected-keys="[language]"  slot="overlay">
            <a-menu-item v-for=" (lang) in languageList" :key="lang.value">
              {{lang.value.toLowerCase() + ' ' + lang.label}}
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import store from '@/store/modules/index';
import { localeOptions } from '@/locales';

export default {
  name: 'LayoutHeader',
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      languageList: localeOptions,
    };
  },
  computed: {
    ...mapState(store.settingsStore, ['language']),
    langAlias() {
      return this.languageList.filter((item) => item.value === this.language)[0].label;
    },
  },
  methods: {
    ...mapActions(store.settingsStore, ['changeLanguage']),
    toggleCollapsed() {
      this.$emit('toggle');
    },
    setLang(lang) {
      this.changeLanguage(lang);
    },
  },
};
</script>

<style lang="less" scoped>
#layout-header.layout-right-header {
  background-color: #fff;
  padding-left: 16px;
  display: flex;
  justify-content: space-between;

  .header-item {
    padding: 0 12px;
  }
}
</style>
