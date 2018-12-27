<template>
  <div class="app">
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
  },
  middleware: 'auth'
}
</script>

<style scoped>
.app {
  position: relative;
  min-height: 100vh;
  background-color: #f8f8fb;
  display: flex;
  flex-direction: column;
}

.main {
  margin: 30px 80px 0;
  padding: 0 30px;
  max-width: 90%;
  position: relative;
}
</style>
