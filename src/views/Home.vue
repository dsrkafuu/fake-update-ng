<template>
  <div class="home">
    <div class="column">
      <div class="card">
        <div class="card-content">
          <home-header></home-header>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <home-footer></home-footer>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <div class="card-content">
          <home-settings></home-settings>
          <home-buttons></home-buttons>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from '@/components/Header.vue';
import HomeSettings from '@/components/Settings.vue';
import HomeButtons from '@/components/Buttons.vue';
import HomeFooter from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSettings,
    HomeButtons,
    HomeFooter,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.home {
  display: flex;
  flex-direction: row;
  @media screen and (max-width: $breakpoint-sm) {
    flex-direction: column;
  }
  width: 100%;
  max-width: $breakpoint-md;
  margin: 0 auto;

  .column {
    margin: 1.5rem 1.5rem 0 1.5rem;

    &:first-child {
      flex: 1 1 auto;
      flex-basis: 25%;
      margin-right: 1.5rem;
    }

    &:last-child {
      flex: 1 1 auto;
      flex-basis: 75%;
      margin-left: 0;
    }

    @media screen and (max-width: $breakpoint-sm) {
      &:first-child {
        flex: 0 1 auto;
        margin: 1.5rem 1.5rem 0 1.5rem;
      }

      &:last-child {
        flex: 0 1 auto;
        margin: 0 1.5rem;
      }
    }
  }

  .card {
    box-shadow: var(--shadow);
    margin-bottom: 1.5rem;
  }

  .card-content {
    padding: 1.5rem;

    border-radius: $border-radius;
    background-color: var(--color-card);
  }
}
</style>