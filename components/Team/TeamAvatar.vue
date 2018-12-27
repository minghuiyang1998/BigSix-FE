<template>
  <div class="team-avatar">
    <img :src="avatar">
  </div>
</template>

<script>
export default {
  props: {
    avatar: String
  }
}
</script>

<style lang="scss" scoped>
$size: 24px;

.team-avatar {
  img {
    max-width: $size;
    max-height: $size;
  }
}
</style>
