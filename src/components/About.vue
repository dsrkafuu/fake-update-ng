<template>
  <div class="about">
    <div class="btn">
      <el-button type="primary" plain>{{ $t('gitHub') }}</el-button>
    </div>
    <div class="btn">
      <el-button type="primary" plain>{{ $t('about') }}</el-button>
    </div>
    <div class="copy">
      <span>&copy; 2020 DSRKafuU</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeAbout',
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.btn:not(:first-child),
.copy {
  margin-top: 1rem;
  text-align: center;
}

button {
  width: 100%;
}
</style>