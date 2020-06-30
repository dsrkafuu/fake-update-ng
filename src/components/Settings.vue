<template>
  <div class="settings">
    <div class="locale">
      <span class="locale-label">{{ $t('home.localeLabel') }}</span>
      <div class="locale-input">
        <select v-model="locale">
          <option value="en_us">English</option>
          <option value="zh_hans">简体中文</option>
        </select>
      </div>
    </div>
    <div class="system">
      <span class="system-label">Locale</span>
      <div class="system-input">
        <select v-model="system">
          <option value="microsoft-windows-10">Windows 10</option>
          <option value="apple-macos-catalina">macOS Catalina</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalSettings',
  data() {
    return {
      locale: 'en_us',
      system: 'microsoft-windows-10',
    };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>