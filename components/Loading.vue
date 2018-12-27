<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      loading: null
    }
  },
  methods: {
    start() {
      this.loading = this.$loading();
    },
    finish() {
      this.loading.close();
    },
    // fail() {
    //   this.loading.close();
    // }
  }
};
</script>

<style scoped>
div {
  display: none;
}
</style>
