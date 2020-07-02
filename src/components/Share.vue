<template>
  <div class="share">
    <el-divider class="share-label" content-position="left">{{ $t('share') }} (NOT FINISHED YET)</el-divider>
    <div class="list">
      <el-button type="primary" plain @click="copyLink" size="small">{{ $t('copyLink') }}</el-button>
      <el-button type="primary" plain @click="twitter" size="small">Twitter</el-button>
      <el-button type="primary" plain @click="facebook" size="small">Facebook</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeShare',
  data() {
    return {
      title: 'Fake Update NG',
      link: 'https://fakeupdate.cc/',
    };
  },
  computed: {
    urlTitle() {
      return encodeURIComponent(this.title);
    },
    urlLink() {
      return encodeURIComponent(this.link);
    },
  },
  methods: {
    copyLink() {},
    twitter() {
      console.log(`https://twitter.com/intent/tweet?text=${this.urlTitle}&url=${this.urlLink}`);
    },
    facebook() {
      console.log(`https://www.facebook.com/sharer/sharer.php?u=${this.urlLink}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.share-label {
  margin-top: 0.5rem;
}

.list {
  display: flex;

  button {
    flex: 1 1 auto;
  }
}
</style>
