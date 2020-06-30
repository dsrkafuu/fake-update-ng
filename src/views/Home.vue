<template>
  <div class="home">
    <global-header></global-header>
    <global-settings></global-settings>
  </div>
</template>

<script>
import GlobalHeader from '@/components/Header.vue';
import GlobalSettings from '@/components/Settings.vue';

export default {
  name: 'Home',
  components: {
    GlobalHeader,
    GlobalSettings,
  },
};
</script>
