<template>
  <div class="settings">
    <div class="locale">
      <!-- Locale label rendered from i18n -->
      <span class="locale-label">{{ $t('localeLabel') }}</span>
      <div class="locale-input">
        <!-- All languages select list -->
        <select v-model="selectedLocale">
          <option
            v-for="locale of locales"
            :key="locale.code"
            :value="locale.code"
          >{{ locale.lang }}</option>
        </select>
      </div>
    </div>
    <div class="system">
      <!-- System label rendered from i18n -->
      <span class="system-label">{{ $t('systemLabel') }}</span>
      <div class="system-input">
        <!-- All systems available -->
        <select v-model="selectedSystem">
          <option
            v-for="system of $t('systems')"
            :key="system.code"
            :value="system.code"
          >{{ system.name }}</option>
        </select>
      </div>
    </div>
    <div class="timer">
      <!-- Timer label rendered from i18n -->
      <span class="timer-label">{{ $t('timerLabel') }}</span>
      <div class="timer-input"></div>
    </div>
  </div>
</template>

<script>
import locales from '@/assets/locales/index.js';

export default {
  name: 'GlobalSettings',
  data() {
    return {
      locales, // Get all data from assets
      selectedLocale: 'en_us',
      selectedSystem: 'microsoft-windows-10',
    };
  },
  watch: {
    // Sync locale with selected
    selectedLocale(val) {
      this.$i18n.locale = val;
      this.$store.dispatch('changeLocale', val);
    },
  },
  mounted() {
    // If has saved locale
    if (this.$store.state.locale !== this.selectedLocale) {
      this.selectedLocale = this.$store.state.locale;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>