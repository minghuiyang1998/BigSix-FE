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
        <el-step title="完成" icon="el-icon-circle-check" :status="step===2 ? 'success' : 'wait' "></el-step>
      </el-steps>
      <div class="mt-4 mb-4">
        <LeagueForm v-if="step===0" ref="leagueForm" />
        <TeamForm v-if="step===1" ref="teamForm" :leagueId="leagueFormId" />
        <div v-show="step===2" class="result">
          <div>
            <el-progress type="circle" :percentage="100" status="success"></el-progress>
            <h4 class="mt-2">创建成功</h4>
          </div>
        </div>
      </div>
      <div slot="footer">
        <el-button @click="closeFormDialog">关闭</el-button>
        <el-button v-if="step===0" type="primary" v-loading="leagueCreating" @click="handleCreateLeague" :disabled="!leagueFormValid">创建联赛</el-button>
        <el-button v-if="step===1" type="primary" v-loading="teamCreating" @click="handleCreateTeams" :disabled="!teamFormValid">创建球队</el-button>
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

      leagueForm: null,
      leagueFormId: null,
      teamForm: null,
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

    ...mapState('match', ['isLeagueMatchesLoading', 'leagueMatches']),

    leagueFormData() {
      return this.leagueForm ? this.leagueForm.formData() : {};
    },

    leagueFormValid() {
      return this.leagueForm ? this.$refs.leagueForm.isValid() : false;
    },

    teamFormData() {
      return this.teamForm ? this.teamForm.formData() : {};
    },

    teamFormValid() {
      return this.teamForm ? this.$refs.teamForm.isValid() : false;
    }
  },

  methods: {
    ...mapActions('league', ['selectLeagueById']),
    ...mapActions('team', ['createTeams']),

    setStep(step) {
      this.step = step;
      this.$nextTick(() => {
        if (step === 0) {
          this.leagueForm = this.$refs.leagueForm;
        } else if (step === 1) {
          this.teamForm = this.$refs.teamForm;
        } else if (step === -1) {
          this.leagueForm = this.teamForm = null;
        }
      })
    },

    openFormDialog() {
      this.dialogVisible = true;
      this.setStep(0);
    },

    closeFormDialog() {
      this.dialogVisible = false;
      this.setStep(-1);
    },

    async handleCreateLeague() {
      this.$store.commit("league/SET_IS_CREATING", true)
      try {
        const league = await this.$axios.$post('/api/league/league', {
            name: this.leagueFormData.name,
            introduction: this.leagueFormData.introduction,
            avatarUrl: this.leagueFormData.avatarUrl,
            leagueType: Number(this.leagueFormData.leagueType),
          });
        this.leagueFormId = league.id;
        this.$store.commit("league/ADD_LEAGUE", league)
        this.setStep(1);
      } catch(e) {
        console.log(e)
        this.$message.error('创建联赛失败！')
      } finally {
        this.$store.commit("league/SET_IS_CREATING", false)
      }
    },

    async handleCreateTeams() {
      this.$store.commit('team/SET_IS_CREATING', true)
      try {
        await this.createTeams(this.teamFormData);
        this.setStep(2);
      } catch (err) {
        Message.error("创建队伍失败！")
      } finally {
        this.$store.commit("team/SET_IS_CREATING", false)
      }
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
