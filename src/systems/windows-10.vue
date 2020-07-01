<template>
  <div class="windows-10">
    <div class="progress">
      <div class="progress-indicator">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="progress-text">
        <span>{{ nowWorking }}</span>
        <span>{{ progressInfo }}</span>
        <span>{{ doNotTurnOff }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'windows-10',
  data() {
    return {
      nowWorking: this.$t('systems["windows-10"].strings.nowWorking'),
      doNotTurnOff: this.$t('systems["windows-10"].strings.doNotTurnOff'),
      progress: 0, // Must be (Int)
      progressInterval: undefined,
    };
  },
  computed: {
    progressInfo() {
      return this.$t('systems["windows-10"].strings.progressInfo', { progress: this.progress }); // Named formatting
    },
  },
  mounted() {
    // Load timer from store
    if (this.$store.state.timer !== this.timer) {
      this.timer = this.$store.state.timer;
    }
    const fullTime = this.timer * 60 * 1000; // Time in ms
    const interval = 500; // Check interval (ms)
    let timePassed = 0;
    this.progressInterval = setInterval(() => {
      if (timePassed > fullTime) {
        this.progress = 100;
        clearInterval(this.progressInterval);
      }
      this.progress = Math.floor((timePassed / fullTime) * 100); // Calculate progress
      timePassed = timePassed + 500;
    }, interval);
  },
};
</script>

<style lang="scss" scoped>
.windows-10 {
  cursor: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7), auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #005a9f;
}

.progress-indicator {
  margin: 0 auto;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  // Dot div
  .dot {
    position: absolute;
    // Circle raidus = 36px/sqrt(2) = 25.45px
    width: 2.25rem;
    height: 2.25rem;
    opacity: 0;
    transform: rotate(180deg);

    animation-iteration-count: infinite;
    animation-name: windows;
    animation-duration: 4500ms;

    // A dot at top-left of div
    &::after {
      content: '';
      width: 0.3rem;
      height: 0.3rem;
      border-radius: 50%;
      background-color: #ffffff;
      display: block; // Make width and height work
    }

    &:nth-child(2) {
      animation-delay: 220ms;
    }
    &:nth-child(3) {
      animation-delay: 440ms;
    }
    &:nth-child(4) {
      animation-delay: 660ms;
    }
    &:nth-child(5) {
      animation-delay: 880ms;
    }
    &:last-child {
      animation-delay: 1100ms;
    }
  }
}

// Animation for per dot
// Stage fast9 slow20 fast12 slow22 fast6
@keyframes windows {
  // Appear
  0% {
    transform: rotate(180deg);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  // Round 1 slow down
  9% {
    transform: rotate(330deg);
    animation-timing-function: linear;
    opacity: 1;
  }
  // Round 1 accelerate
  29% {
    transform: rotate(425deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }
  // Round 2 slow down
  41% {
    transform: rotate(675deg);
    animation-timing-function: linear;
    opacity: 1;
  }
  // Round 2 accelerate
  63% {
    transform: rotate(785deg);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  // Reach the end
  69% {
    transform: rotate(900deg);
    opacity: 1;
  }
  // Hide
  70% {
    transform: rotate(900deg);
    opacity: 0;
  }
  // Interval
  100% {
    transform: rotate(900deg);
    opacity: 0;
  }
}

.progress-text {
  text-align: center;
  font-size: 1.125rem;
  font-weight: 400;
  font-family: 'Segoe UI', Arial, 'Microsoft YaHei UI', 'Microsoft YaHei', sans-serif;
  line-height: 1.5rem;
  margin-top: 0.5rem;
  color: #ffffff;

  span {
    display: block;
  }
}
</style>
