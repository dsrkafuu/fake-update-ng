<template>
  <div class="about">
    <div class="card">
      <div class="card-content">
        <div class="btn">
          <router-link to="/">
            <el-button type="primary" plain>Back home</el-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.about {
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

.btn button {
  width: 100%;
}
</style>