<template>
  <div class="settings">
    <div class="locale">
      <!-- Locale label rendered from i18n -->
      <span class="locale-label">{{ $t('localeLabel') }}</span>
      <div class="locale-input">
        <!-- All languages select list -->
        <select v-model="locale">
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
        <select v-model="system">
          <option
            v-for="system of $t('systems')"
            :key="system.code"
            :value="system.code"
          >{{ system.name }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import ls from '@/assets/packages/local_storage.js';
import locales from '@/assets/locales/index.js';

export default {
  name: 'GlobalSettings',
  data() {
    return {
      locales, // Get all data from assets
      locale: 'en_us',
      system: 'microsoft-windows-10',
    };
  },
  watch: {
    // Sync locale with selected
    locale(val) {
      this.$i18n.locale = val;
      ls.set('fake-update_locale', val);
    },
  },
  mounted() {
    let lsLocale = ls.get('fake-update_locale');
    if (lsLocale) {
      this.$i18n.locale = lsLocale;
      this.locale = lsLocale;
    } else {
      ls.set('fake-update_locale', this.locale);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>