<template>
  <div class="match-list">
    <MatchCard v-for="match in matches" :key="match.id" :match="match" />
  </div>
</template>

<script>
import MatchCard from './MatchCard';

export default {
  props: {
    matches: Array
  },

  components: {
    MatchCard
  }
}
</script>

<style lang="scss" scoped>
.match-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > * {
    width: 49%;
    margin: 16px 0;
  }
}
</style>
