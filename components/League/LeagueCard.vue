<template>
  <div class="league-card box-shadow-large">
    <div class="league-avatar">
      <div class="league-avatar__image" :style="`background-image: url(${avatar})`"></div>
    </div>
    <div class="league-info">
      <div class="league-info__name">{{name}}</div>
      <div v-clampy="2" class="league-info__intro">{{intro}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    intro: String,
    avatar: String,
  }
}
</script>

<style lang="scss" scoped>
.league-card {
  background: #fff;
  margin: 30px 0;
  padding: 10px 20px;
  display: flex;
  border-radius: 3px;
  max-width: 400px;
}

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

.league-info {
  display: flex;
  flex-direction: column;
  &__name {
    font-size: 24px;
  }

  &__intro {
    color: #888;
    font-size: 0.9em;
  }
}
</style>
