<template>
  <div class="footer">
    <el-button type="primary" plain>{{ $t('gitHub') }}</el-button>
    <el-button type="primary" plain>{{ $t('about') }}</el-button>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter',
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
</style>