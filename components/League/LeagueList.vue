<template>
  <div class="league-list">
    <LeagueCard
      v-for="league in leagues"
      :key="league.name"
      :name="league.name"
      :intro="league.intro"
      :avatar="league.avatar_url" />
  </div>
</template>

<script>
import LeagueCard from './LeagueCard';

export default {
  components: {
    LeagueCard
  },
  props: {
    leagues: Array
  }
}
</script>

<style lang="scss" scoped>
.league-list {

}
</style>

