<template>
  <div class="footer">
    footer
    <div class="site-locale">
      <!-- Locale label rendered from i18n -->
      <span class="site-locale-label">站点语言</span>
      <div class="site-locale-input">
        <!-- All languages select list -->
        <select v-model="siteLocale">
          <option
            v-for="(data, locale) of siteLocales"
            :key="locale"
            :value="locale"
          >{{ data.lang }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import _ from '@/default.js';
import index from '@/index.js';
import ls from '@/assets/packages/local-storage.js';

export default {
  name: 'HomeFooter',
  data() {
    return {
      siteLocales: index.locales, // Get all site locales from index
      siteLocale: _.locale, // Set default site locale
    };
  },
  watch: {
    // Sync data with localStorage
    siteLocale(val) {
      this.$i18n.locale = val;
      ls.set('fake-update-siteLocale', val);
    },
  },
  mounted() {
    // Detect saved site locale from localStorage
    let savedSiteLocale = ls.get('fake-update-siteLocale');
    if (savedSiteLocale && savedSiteLocale !== this.siteLocale) {
      this.siteLocale = savedSiteLocale;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
