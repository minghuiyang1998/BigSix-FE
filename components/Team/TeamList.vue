<template>
  <div class="team-list">
    <team-card
      v-for="team in teams"
      :key="team.id"
      :team="team"
    />
  </div>

</template>

<script>
import TeamCard from './TeamCard';

export default {
  props: {
    teams: Array
  },
  components: {
    TeamCard
  }
}
</script>

<style lang="scss" scoped>
.team-list {
  display: flex;
  margin: 0 -8px;
  >* {
    padding: 0 8px;
  }
}
</style>
