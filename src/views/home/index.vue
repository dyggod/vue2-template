<template>
  <div>首页
    <a-button @click="clickSpin">spin</a-button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    clickSpin() {
      this.$spin.show();
    },
  },
};
</script>

<style>

</style>
