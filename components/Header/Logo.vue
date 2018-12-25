<template>
  <div class="logo">
    <nuxt-link class="logo__link" to="/" tag="h1">
      BigSix
    </nuxt-link>
  </div>
</template>

<style scoped>
.logo {
  height: 100%;
  width: 120px;
  background-repeat: no-repeat;
  background-image: url("~assets/image/BigSix-Logo.png");
  background-position: center center;
  background-size: contain;
  text-indent:-9999px;
}

.logo__link {
  height: 100%;
  cursor: pointer;
}
</style>
