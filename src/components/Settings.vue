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
      <div class="timer-input">
        <input type="number" v-model="selectedTimer" />
      </div>
    </div>
  </div>
</template>

<script>
import locales from '@/assets/locales/index.js';
import _ from '@/default.js';

export default {
  name: 'GlobalSettings',
  data() {
    return {
      locales, // Get all data from assets
      selectedLocale: _.locale, // Always sync with store
      selectedSystem: _.system,
      selectedTimer: _.timer,
    };
  },
  watch: {
    // Sync data with selected
    selectedLocale(val) {
      this.$i18n.locale = val;
      this.$store.commit('changeLocale', val);
    },
    selectedSystem(val) {
      this.$store.commit('changeSystem', val);
    },
    selectedTimer(val) {
      this.$store.commit('changeTimer', val);
    },
  },
  mounted() {
    // If Vuex get the saved data which is diff from default
    if (this.$store.state.locale !== this.selectedLocale) {
      this.selectedLocale = this.$store.state.locale; // Change the locale to saved
      console.warn('Auto changed the locale to ' + this.$store.state.locale);
    }
    if (this.$store.state.system !== this.selectedSystem) {
      this.selectedSystem = this.$store.state.system; // Change the system to saved
      console.warn('Auto changed the system to ' + this.$store.state.system);
    }
    if (this.$store.state.timer !== this.selectedTimer) {
      this.selectedTimer = this.$store.state.timer; // Change the system to saved
      console.warn('Auto changed the timer to ' + this.$store.state.timer);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>