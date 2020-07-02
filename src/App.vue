<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

@import '@/assets/scss/variable.scss';

#app {
  @include color();
}

html,
body,
#app {
  font-size: $font-size;
  background-color: var(--color-bg);
  color: var(--color-font);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>