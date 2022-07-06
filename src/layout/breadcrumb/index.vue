<template>
  <a-card class="header-bread">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(breaditem, key) in levelList" :key="key">
        {{ breaditem.meta.title }}
      </a-breadcrumb-item>
    </a-breadcrumb>
    <div class="title">
      <h1>
        {{levelList[levelList.length - 1].meta.title}}
      </h1>
    </div>
  </a-card>
</template>

<script>
export default {
  name: 'BreadCrumb',
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
/deep/ .ant-card-body{
  padding: 12px 24px 0px 24px;
}

.header-bread {
  margin-bottom: 8px !important;
}
</style>
