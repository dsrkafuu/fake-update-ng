<template>
  <div class="info">
    <div class="btn">
      <a href="https://github.com/amzrk2/fake-update-ng" target="_blank">
        <el-button type="primary" plain>{{ $t('gitHub') }}</el-button>
      </a>
    </div>
    <div class="btn">
      <router-link to="/about">
        <el-button type="primary" plain>{{ $t('about') }}</el-button>
      </router-link>
    </div>
    <div class="copy">
      <span>&copy; 2020 DSRKafuU</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeInfo',
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