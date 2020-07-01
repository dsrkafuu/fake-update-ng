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
        <select v-model="systemLocale">
          <option v-for="(value, key) of systemLocales" :key="key" :value="key">{{ value.lang }}</option>
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
import _ from '@/default.js';
import index from '@/index.js';

export default {
  name: 'HomeSettings',
  data() {
    return {
      systems: index.systems, // Get all systems from index
      system: _.system, // Set default system
      systemLocale: _.locale, // Set default system locale
      selectedTimer: _.timer, // Set default timer
    };
  },
  computed: {
    // Get all system locales from index, sync with selected system
    systemLocales() {
      return this.systems[this.system].locales;
    },
  },
};
</script>
