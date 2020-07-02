<template>
  <div class="info">
    <div class="btn">
      <a href="https://github.com/amzrk2/fake-update-ng" target="_blank">
        <el-button type="primary" plain>{{ $t('gitHub') }}</el-button>
      </a>
    </div>
    <div class="btn">
      <router-link to="/tos">
        <el-button type="primary" plain>{{ $t('tos') }}</el-button>
      </router-link>
    </div>
    <div class="copy">
      <span>
        &copy; 2020
        <a class="p-info" href="https://twitter.com/amzrk2" target="_blank">DSRKafuU</a>
      </span>
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

.btn {
  a {
    display: block;
  }

  button {
    width: 100%;
  }
}

.p-info {
  color: $color-fuji;
  text-decoration: none;
}
</style>