<template>
  <div>
    <Header />
    <main class="main">
      <nuxt />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style scoped>
.main {
  margin: 30px 80px 0;
  padding: 0 30px;
  max-width: 90%;
}
</style>
