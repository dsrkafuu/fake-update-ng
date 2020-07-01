<template>
  <div class="home">
    <global-header></global-header>
    <global-settings></global-settings>
    <global-buttons></global-buttons>
  </div>
</template>

<script>
import GlobalHeader from '@/components/Header.vue';
import GlobalSettings from '@/components/Settings.vue';
import GlobalButtons from '@/components/Buttons.vue';

export default {
  name: 'Home',
  components: {
    GlobalHeader,
    GlobalSettings,
    GlobalButtons,
  },
};
</script>
