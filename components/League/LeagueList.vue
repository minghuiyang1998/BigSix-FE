<template>
  <div class="league-list">
    <LeagueCard
      v-for="league in leagues"
      :key="league.id"
      :id="league.id"
      :name="league.name"
      :introduction="league.introduction"
      :avatar="league.avatarUrl"
      :isSelected="selectedId === league.id"
      @click.native="handleClick(league.id)"
     />
     <LeagueAdd @click.native="$emit('addLeague')" />
  </div>
</template>

<script>
import LeagueCard from './LeagueCard';
import LeagueAdd from './LeagueAdd';

export default {
  components: {
    LeagueCard,
    LeagueAdd,
  },
  props: {
    leagues: Array,
    selectedId: Number,
  },

  methods: {
    handleClick(id) {
      this.$emit("selected", id)
    },
  }
}
</script>

<style lang="scss" scoped>
.league-list {

}
</style>

