<template>
  <div class="buttons">
    <button @click="startUpdate">{{ $t('buttonLabel') }}</button>
  </div>
</template>

<script>
export default {
  name: 'HomeButtons',
  methods: {
    startUpdate() {
      this.$router.push(this.$store.state.system);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
