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
$size: 28px;

.team-avatar {
  display: flex;
  align-items: center;
  img {
    max-width: $size;
    max-height: $size;
  }
}
</style>
