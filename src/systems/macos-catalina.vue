<template>
  <div class="macos-catalina">
    <div class="apple-logo">
      <apple-logo></apple-logo>
    </div>
    <div class="progress-bar" ref="progressBar">
      <div class="progress-bar-placeholder"></div>
      <div class="progress-bar-progress" :style="progress"></div>
    </div>
  </div>
</template>

<script>
import AppleLogo from '@/assets/svgs/AppleLogo.vue';
import _ from '@/default.js';

export default {
  name: 'macos-catalina',
  components: {
    AppleLogo,
  },
  data() {
    return {
      // Timer
      timer: _.timer,
      // Progress
      progress: {
        width: '0',
        transition: 'none',
      },
      progressInterval: undefined,
    };
  },
  mounted() {
    // Load timer from store
    if (this.$store.state.timer !== this.timer) {
      this.timer = this.$store.state.timer;
    }
    const animationTime = this.timer * 60 * 1000; // Animation time (ms)
    // Add transition CSS according to timer
    this.progress.transition = `width ${animationTime}ms ease`;
    // Delay the change of width after 4ms (DOM_MIN_TIMEOUT_VALUE)
    // To prevent CSS transition not work properly
    setTimeout(() => {
      this.progress.width = '100%';
    }, 4);
  },
};
</script>

<style lang="scss" scoped>
.macos-catalina {
  cursor: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7), auto;
  background-color: #000000;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.apple-logo {
  position: absolute;
  width: 3.75rem;
  color: #ffffff;

  svg {
    width: 100%;
  }
}

.progress-bar {
  position: relative;
  top: 6.3rem;
  width: 12rem;
  height: 0.3rem;
  // Use radius and overflow to limit inner progress bar radius
  border-radius: 0.125rem;
  overflow: hidden;
}

.progress-bar-placeholder {
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: 0.125rem;
  border: 1px solid #3d3d3d;
  background-color: #262626;
}

.progress-bar-progress {
  position: absolute;
  // width: 10rem;
  height: inherit;
  background-color: #cccccc;
}
</style>
