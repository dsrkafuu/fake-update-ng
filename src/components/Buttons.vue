<template>
  <div class="buttons">
    <el-button type="primary" plain @click="startUpdate">{{ $t('buttonLabel') }}</el-button>
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
