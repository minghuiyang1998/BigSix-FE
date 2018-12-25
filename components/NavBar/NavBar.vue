<template>
  <div class="header">
    <Logo />
    <Menu />
  </div>
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
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 80px;
}
</style>
