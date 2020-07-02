<template>
  <div class="header">
    <h1>{{ $t('title') }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.header {
  text-align: center;

  h1 {
    font-size: $font-size;
    font-weight: 600;
    margin: 0;
  }
}
</style>
