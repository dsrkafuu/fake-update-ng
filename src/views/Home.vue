<template>
  <div class="home">
    <home-header></home-header>
    <home-settings></home-settings>
    <home-buttons></home-buttons>
    <home-footer></home-footer>
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
