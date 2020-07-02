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
  height: 100%;
  background-color: var(--color-bg);
  color: var(--color-font);
}
</style>