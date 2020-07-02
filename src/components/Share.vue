<template>
  <div class="share">
    <div class="item twitter">
      <a class="twitter-share-button" href="https://twitter.com/intent/tweet">Tweet</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeShare',
  methods: {
    twitter() {},
  },
  mounted() {
    this.twitter();
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
</style>
