<template>
  <div class="d-flex">
    <LeagueList class="mr-6"
      :leagues="leagues"
      :selectedId="selectedId"
      @selected="selectLeagueById"
      @addLeague="openFormDialog"
      v-loading="leagueLoading"
    />
    <LeagueDashboard
      class="flex-auto"
      :league="current"
      :teams="teams"
      :matches="leagueMatches"
      :teamLoading="teamLoading"
      :matchesLoading="isLeagueMatchesLoading" />
    <!-- <TeamList class="flex-auto" /> -->
    <el-dialog title="新建联赛" :visible.sync="dialogVisible" center :close-on-click-modal="false">
      <el-steps :active="step" simple finish-status="success">
        <el-step title="创建联赛" icon="el-icon-edit"></el-step>
        <el-step title="创建球队" icon="el-icon-star-off"></el-step>
        <el-step title="完成" icon="el-icon-circle-check" status="success"></el-step>
      </el-steps>
      <div class="mt-4 mb-4">
        <LeagueForm v-if="step===0" ref="leagueForm" />
        <TeamForm v-if="step===1" ref="teamForm":leagueId="league.id" />
        <div v-show="step===2" class="result">
          <div>
            <el-progress type="circle" :percentage="100" status="success"></el-progress>
            <h4 class="mt-2">创建成功</h4>
          </div>
        </div>
      </div>
      <div slot="footer">
        <el-button @click="closeFormDialog">关闭</el-button>
        <el-button v-if="step===0" type="primary" v-loading="leagueCreating" @click="handleCreateLeague">创建联赛</el-button>
        <el-button v-if="step===1" type="primary" v-loading="teamCreating" @click="handleCreateTeams">创建球队</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { LeagueList, LeagueForm, LeagueDashboard } from '@/components/League';
import { TeamList, TeamForm } from '@/components/Team';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  components: {
    LeagueList,
    LeagueDashboard,
    TeamList,
    LeagueForm,
    TeamForm,
  },
  head: {
    title: '我的联赛'
  },

  async fetch({ store }) {
    await store.dispatch('league/getLeagues');
  },

  data() {
    return {
      dialogVisible: false,
      step: -1,

      league: {
        id: 1
      },
    }
  },

  computed: {
    ...mapState('league', ['leagues', 'selectedId']),
    ...mapState('league', {
      leagueLoading: 'isFetching',
      leagueCreating: 'isCreating',
    }),
    ...mapGetters('league', ['current']),

    ...mapState('team', {
      teamLoading: 'isFetching',
      teamCreating: 'isCreating',
      teams: 'teams'
    }),

    ...mapState('match', ['isLeagueMatchesLoading', 'leagueMatches'])
  },

  methods: {
    ...mapActions('league', ['selectLeagueById']),

    openFormDialog() {
      this.dialogVisible = true;
      this.step = 0;
    },

    closeFormDialog() {
      this.dialogVisible = false;
      this.step = -1;
    },

    async handleCreateLeague() {
      this.step++;
    },

    async handleCreateTeams() {
      this.step++;
    }
  }
}
</script>


<style lang="scss" scoped>
.result {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
