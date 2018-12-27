<template>
  <div class="team-list">
    <team-card
      v-if="teams.length > 0"
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
  flex-wrap: wrap;
  margin: -8px;
  >* {
    padding: 8px;
  }
}
</style>
