<template>
  <transition name="customSpin"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut">
    <div class="custom-spin" v-if="spinning">
      <div class="spin-container">
        <Spin :tip="tip" />
      </div>
    </div>
  </transition>
</template>

<script>
import { Spin } from 'ant-design-vue';

export default {
  name: 'GlobalSpin',
  components: {
    Spin,
  },
  data() {
    return {
      spinning: false,
      timer: null,
      tip: '',
    };
  },
  methods: {
    start(options) {
      if (options) {
        const { msg, duration } = options;
        this.tip = msg || '';
        if (duration && typeof duration === 'number') {
          if (!this.timer) {
            this.timer = setTimeout(() => {
              this.spinning = false;
              clearTimeout(this.timer);
              this.timer = null;
            }, duration);
          }
        }
      }
      this.spinning = true;
    },
    end() {
      this.spinning = false;
      clearTimeout(this.timer);
      this.timer = null;
      this.tip = '';
    },
  },
};
</script>

<style lang="less" scoped>
.custom-spin {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);

  .spin-container {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
