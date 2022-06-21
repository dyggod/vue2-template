<template>
  <div>dashboard test

    <div class="rem-test">
      rem 测试
      <div class="font">字号16px</div>
      <div class="wh">宽度100px，高度100px</div>
      <div class="height-test">高度测试</div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less" scoped>
.rem-test {
  .font {
    font-size: 16px;
  }

  .wh {
    background-color: red;
    height: 100px;
    width: 100px;
  }

  .height-test {
    height: 500px;
    background-color: aqua;
  }
}
</style>
