<template>
  <div class="tos">
    <div class="card">
      <div class="card-content">
        <div class="btn">
          <router-link to="/">
            <el-button type="primary" plain>{{ $t('backHome') }}</el-button>
          </router-link>
        </div>
        <div class="info">
          <p>Please go to GitHub repo to check out more details about this project.</p>
          <el-divider content-position="left">{{ $t('tos') }}</el-divider>
          <p>This website uses cookies to ensure you get the best experience.</p>
          <p>All system page designs and graphics are from the Internet. This project and all contributors shall not be responsible for any dispute or loss caused by using this project.</p>
          <p>This project is released under the Apache License 2.0.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TOS',
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.tos {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: $breakpoint-md;
  margin: 0 auto;

  .card {
    box-shadow: $shadow;
    margin: 1.5rem;
    width: 100%;
  }

  .card-content {
    padding: 1.5rem;
    border-radius: $border-radius;
    background-color: $color-card;
  }
}

.btn {
  a {
    display: block;
  }

  button {
    width: 100%;
  }
}

.info p {
  line-height: 1.25rem;
}
</style>