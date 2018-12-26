<template>
  <div class="d-flex">
    <LeagueList class="mr-6"
      :leagues="leagues"
      :selectedId="selectedId"
      @selected="selectLeagueById"
      @addLeague="openFormDialog"
    />
    <TeamList class="flex-auto" />
    <el-dialog title="新建联赛" :visible.sync="dialogVisible" center>
      <el-steps :active="step" simple>
        <el-step title="创建联赛" icon="el-icon-edit"></el-step>
        <el-step title="创建球队" icon="el-icon-star-off"></el-step>
        <el-step title="完成" icon="el-icon-circle-check"></el-step>
      </el-steps>
      <div class="mt-4 mb-4">
        <LeagueForm v-if="step===1" ref="leagueForm" />
        <TeamForm v-if="step===2" ref="teamForm"/>
        <div v-show="step===3" class="result">
          <div>
            <el-progress type="circle" :percentage="100" status="success"></el-progress>
            <h4 class="mt-2">创建成功</h4>
          </div>
        </div>
      </div>
      <div slot="footer">
        <el-button @click="closeFormDialog">关闭</el-button>
        <el-button v-if="step===1" type="primary" @click="handleCreateLeague">创建联赛</el-button>
        <el-button v-if="step===2" type="primary" @click="handleCreateTeams">创建球队</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { LeagueList, LeagueForm } from '@/components/League';
import { TeamList, TeamForm } from '@/components/Team';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    LeagueList,
    TeamList,
    LeagueForm,
    TeamForm,
  },
  head: {
    title: '我的联赛'
  },

  data() {
    return {
      dialogVisible: false,
      step: 0,
    }
  },

  computed: {
    ...mapState('league', ['leagues', 'selectedId'])
  },

  methods: {
    ...mapActions('league', ['selectLeagueById']),

    openFormDialog() {
      this.dialogVisible = true;
      this.step = 1;
    },

    closeFormDialog() {
      this.dialogVisible = false;
      this.step = 0;
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
