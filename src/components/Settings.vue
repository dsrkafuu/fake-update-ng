<template>
  <div class="settings">
    <div class="system">
      <!-- System label rendered from i18n -->
      <span class="system-label">{{ $t('systemLabel') }}</span>
      <div class="system-input">
        <!-- All systems available -->
        <select v-model="system">
          <option v-for="(value, key) of systems" :key="key" :value="key">{{ value.name }}</option>
        </select>
      </div>
    </div>
    <div class="locale">
      <!-- Locale label rendered from i18n -->
      <span class="locale-label">{{ $t('localeLabel') }}</span>
      <div class="locale-input">
        <select v-model="systemLocale" :disabled="localeDisabled">
          <option v-for="(value, key) of systemLocales" :key="key" :value="key">{{ value.lang }}</option>
        </select>
      </div>
    </div>
    <div class="timer">
      <!-- Timer label rendered from i18n -->
      <span class="timer-label">{{ $t('timerLabel') }}</span>
      <div class="timer-input">
        <input type="number" v-model="timer" />
      </div>
    </div>
  </div>
</template>

<script>
import _ from '@/default.js';
import index from '@/index.js';

export default {
  name: 'HomeSettings',
  data() {
    return {
      systems: index.systems, // Get all systems from index
      system: _.system, // Set default system
      systemLocale: _.locale, // Set default system locale
      timer: _.timer, // Set default timer
    };
  },
  computed: {
    // Get all system locales from index, sync with selected system
    systemLocales() {
      return this.systems[this.system].locales;
    },
    // Disable local selection when this system has no text
    localeDisabled() {
      if (Object.keys(this.systemLocales).length === 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    system(val) {
      this.$store.commit('changeSystem', val);
    },
    systemLocale(val) {
      this.$store.commit('changeLocale', val);
    },
    timer(val) {
      this.$store.commit('changeTimer', val);
    },
  },
  mounted() {
    if (this.$store.state.system !== this.system) {
      this.system = this.$store.state.system;
    }
    if (this.$store.state.locale !== this.systemLocale) {
      this.systemLocale = this.$store.state.locale;
    }
    if (this.$store.state.timer !== this.timer) {
      this.timer = this.$store.state.timer;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>