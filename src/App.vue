<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/variable.scss';

* {
  box-sizing: border-box;
}

html,
body,
#app {
  font-size: $font-size;
  background-color: $color-bg;
  color: $color-font;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>