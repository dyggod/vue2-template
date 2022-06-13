import { defineStore } from 'pinia';

const settingsStore = defineStore('settingsStore', {
  state: () => ({
    theme: '',
    language: 'en',
  }),
  actions: {
    // 切换主题
    changeTheme(theme) {
      this.theme = theme;
    },

    // 切换语言
    changeLanguage(language) {
      this.language = language;
    },
  },
});

export default settingsStore;
