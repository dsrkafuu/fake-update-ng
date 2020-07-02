<template>
  <div id="app" data-theme="light">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

@import '@/assets/scss/variable.scss';

#app[data-theme='auto'] {
  @include light();

  @media (prefers-color-scheme: dark) {
    @include dark();
  }
}

#app[data-theme='light'] {
  @include light();
}

#app[data-theme='dark'] {
  @include dark();
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