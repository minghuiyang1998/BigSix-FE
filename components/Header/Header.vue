<template>
  <header class="header">
    <Logo />
    <Menu />
  </header>
</template>

<script>
import Logo from './Logo';
import Menu from './Menu';

export default {
  components: {
    Logo,
    Menu
  }
}
</script>

<style scoped>
.header {
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 10px 80px;
  border-bottom: 1px solid #eee;
}
</style>
