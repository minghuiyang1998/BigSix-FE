<template>
  <div class="league-avatar">
    <div class="league-avatar__image" :style="`background-image: url(${avatar})`"></div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: String
  }
}
</script>

<style lang="scss">
.league-avatar {
  width: 80px;
  height: 80px;
  display: flex;
  padding-right: 10px;
  flex-shrink: 0;
  &__image {
    width: 100%;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>
