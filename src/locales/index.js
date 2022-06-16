import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zh from './lang/zh-CN';
import en from './lang/en-US';

export const localeOptions = [
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
];

export const LOCALES = {
  zh: localeOptions[0],
  en: localeOptions[1],
};

Vue.use(VueI18n);

/**
 * 创建 i18n 配置
 * @param locale 本地化语言
 * @param fallback 回退语言
 * @returns {VueI18n}
 */
function initI18n(locale, fallback) {
  const i18nOptions = {
    locale,
    fallbackLocale: fallback,
    silentTranslationWarn: true,
    messages: {
      [LOCALES.en.value]: en,
      [LOCALES.zh.value]: zh,
    },
  };
  return new VueI18n(i18nOptions);
}

export {
  initI18n,
};
