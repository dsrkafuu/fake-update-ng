<template>
  <div class="header">
    <h1>{{ $t('title') }}</h1>
    <element-select></element-select>
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
    font-size: calc(#{$font-size} * 1.5);
    margin: 0;
  }
}
</style>
