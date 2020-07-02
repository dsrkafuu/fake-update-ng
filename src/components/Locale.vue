<template>
  <div class="locale">
    <div class="site-locale">
      <div class="site-locale-input">
        <!-- All languages select list -->
        <el-select v-model="siteLocale">
          <el-option
            v-for="(data, locale) in siteLocales"
            :key="locale"
            :label="data.lang"
            :value="locale"
          ></el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
import _ from '@/default.js';
import index from '@/index.js';
import ls from '@/assets/packages/local-storage.js';

export default {
  name: 'HomeLocale',
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