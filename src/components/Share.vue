<template>
  <div class="share">
    <el-divider class="share-label" content-position="left">{{ $t('share') }}</el-divider>
    <div class="list">
      <el-button
        id="copy"
        type="primary"
        plain
        size="small"
        data-clipboard-action="copy"
        data-clipboard-text="Fake Update NG https://fakeupdate.cc/"
      >{{ $t('copyLink') }}</el-button>
      <a :href="urlTwitter" target="_blank">
        <el-button type="primary" plain size="small">Twitter</el-button>
      </a>
      <a :href="urlFackbook" target="_blank">
        <el-button type="primary" plain size="small">Facebook</el-button>
      </a>
    </div>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard';

export default {
  name: 'HomeShare',
  data() {
    return {
      title: 'Fake Update NG',
      link: 'https://fakeupdate.cc/',
      cb: undefined,
    };
  },
  computed: {
    urlTwitter() {
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(this.title)}&url=${encodeURIComponent(
        this.link
      )}`;
    },
    urlFackbook() {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.link)}`;
    },
  },
  mounted() {
    this.cb = new ClipboardJS('#copy');
    this.cb.on('success', (e) => {
      this.$message(this.$t('shareSucc'));
      e.clearSelection();
    });
    this.cb.on('error', () => {
      this.$message(this.$t('shareFail'));
    });
  },
  destroyed() {
    this.cb.destroy();
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

  a {
    display: block;
    flex: 1 1 auto;

    button {
      width: 100%;
    }

    margin-left: 1rem;
  }

  button {
    flex: 1 1 auto;
  }
}
</style>
