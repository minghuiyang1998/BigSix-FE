<template>
  <div class="league-list">
    <LeagueCard
      v-for="league in leagues"
      :key="league.id"
      :id="league.id"
      :name="league.name"
      :intro="league.intro"
      :avatar="league.avatar_url"
      :isSelected="selectedId === league.id"
      @click.native="handleClick(league.id)"
      @upload="handleUpload"
     />
     <LeagueAdd @click.native="$emit('addLeague')" />
    <LeagueUpload ref="upload" />
  </div>
</template>

<script>
import LeagueCard from './LeagueCard';
import LeagueAdd from './LeagueAdd';
import LeagueUpload from './LeagueUpload';

export default {
  components: {
    LeagueCard,
    LeagueAdd,
    LeagueUpload
  },
  props: {
    leagues: Array,
    selectedId: Number,
  },

  methods: {
    handleClick(id) {
      this.$emit("selected", id)
    },

    handleUpload(id) {
      this.$refs.upload.open(id)
    }
  }
}
</script>

<style lang="scss" scoped>
.league-list {

}
</style>

