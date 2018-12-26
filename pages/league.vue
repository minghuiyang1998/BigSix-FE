<template>
  <div class="d-flex">
    <LeagueList class="mr-6"
      :leagues="leagues"
      :selectedId="selectedId"
      @selected="selectLeagueById"
    />
    <TeamList class="flex-auto" />
  </div>
</template>

<script>
import { LeagueList } from '@/components/League';
import { TeamList } from '@/components/Team';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    LeagueList,
    TeamList
  },
  head: {
    title: '我的联赛'
  },
  computed: {
    ...mapState('league', ['leagues', 'selectedId'])
  },

  methods: {
    ...mapActions('league', ['selectLeagueById']),
  }
}
</script>
