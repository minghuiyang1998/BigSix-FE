<template>
  <section
    class="d-flex flex-justify-center flex-items-center"
    style="background: linear-gradient(-60deg,#fff 40%,  #57B08F 40%) ; height: 100vh;"
  >
    <div class="col-md-8 col-lg-8 text-gray bg-white py-4 rounded-2 border box-shadow-large">
      <el-steps :active="step" finish-status="success" align-center>
        <el-step title="选择联赛" description></el-step>
        <el-step title="选择参赛队" description></el-step>
        <el-step title="选择参赛队" description></el-step>
        <el-step title="选择赛制" description></el-step>
        <el-step title="预测" description></el-step>
      </el-steps>

      <div v-show="currentTable === 'league'">
        <div class="text-center my-4 f4">联赛名称</div>
        <div class="overflow-auto" style="height: 300px;">
          <div
            v-for="league in leagues"
            @click="onLeagueSelect(league.id)"
            class="table-item text-center py-3"
            :class="league.id == current.league ? 'selected':''"
            :key="league.id"
          >{{league.name}}</div>
        </div>
        <div class="d-flex mt-4 flex-justify-between flex-items-center px-4">
          <el-button disabled>上一步</el-button>
          <el-button @click="onNextButtonClick()">下一步</el-button>
        </div>
      </div>

      <div v-show="currentTable === 'teamA'">
        <div class="text-center my-4 f4">主队名称</div>
        <div class="overflow-auto" style="height: 300px;">
          <div
            v-for="team in teams"
            @click="onTeamASelect(team.id)"
            class="table-item text-center py-3"
            :class="team.id == current.teamA ? 'selected':''"
            :key="team.id"
          >{{team.name}}</div>
        </div>
        <div class="d-flex mt-4 flex-justify-between flex-items-center px-4">
          <el-button @click="onBackButtonClick()">上一步</el-button>
          <el-button @click="onNextButtonClick()">下一步</el-button>
        </div>
      </div>

      <div v-show="currentTable === 'teamB'">
        <div class="text-center my-4 f4">客队名称</div>
        <div class="overflow-auto" style="height: 300px;">
          <div
            v-for="team in teams"
            @click="onTeamBSelect(team.id)"
            class="table-item text-center py-3"
            :class="team.id == current.teamA ? 'another':(team.id == current.teamB ? 'selected' : '')"
            :key="team.id"
          >{{team.name}}</div>
        </div>
        <div class="d-flex mt-4 flex-justify-between flex-items-center px-4">
          <el-button @click="onBackButtonClick()">上一步</el-button>
          <el-button @click="onNextButtonClick()">下一步</el-button>
        </div>
      </div>

      <div v-show="currentTable === 'rule'">
        <div class="text-center my-4 f4">赛制</div>
        <div class="overflow-auto" style="height: 300px;">
          <div
            v-for="rule in rules"
            @click="onRuleSelect(rule.id)"
            class="table-item text-center py-3"
            :class="rule.id == current.rule ? 'selected':''"
            :key="rule.id"
          >{{rule.name}}</div>
        </div>
        <div class="d-flex mt-4 flex-justify-between flex-items-center px-4">
          <el-button @click="onBackButtonClick()">上一步</el-button>
          <el-button @click="onPredictButtonClick()">开始预测</el-button>
        </div>
      </div>

      <div v-show="currentTable === 'predict'" class="position-relative">
        <div
          v-show="isLoading"
          ref="loading"
          class="mx-auto my-8 bg-white"
          style="width: 200px; height: 200px;"
        ></div>
        <div v-if="!isLoading" class="d-flex m-6 flex-items-center">
          <div class="col-3 text-center">
            <img v-bind:src="result.teamA.avatar" class="img circle mr-2">
            <!-- <div class="h1">{{result.teamA.name}}</div> -->
          </div>
          <div class="col-6 mx-6">
            <div>hostWinRate</div>
            <el-progress
              :percentage="hostWinRate"
              color="#57B08F"
              :stroke-width="8"
              class="my-2"
            ></el-progress>
            <div>drawGameRate</div>
            <el-progress
              :percentage="drawGameRate"
              color="#8e71c7"
              :stroke-width="8"
              class="my-2"
            ></el-progress>
            <div>guestWinRate</div>
            <el-progress
              :percentage="guestWinRate"
              color="#ec6a6a"
              :stroke-width="8"
              class="my-2"
            ></el-progress>
          </div>
          <div class="col-3 text-center">
            <img v-bind:src="result.teamB.avatar" class="img circle mr-2">
            <!-- <div class="flex-auto h1">{{result.teamB.name}}</div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const tableStatesENUM = ["league", "teamA", "teamB", "rule", "predict"];
import lottie from "lottie-web";

export default {
  // fetch({ store, redirect }) {
  //   if (!store.state.isLogin) {
  //     console.log("not login!");
  //     return redirect("/login");
  //   }
  // },
  async asyncData({ $axios }) {

    let leagues;
    try {
      leagues = await $axios.$get("/api/league/league");
      console.log(leagues);
    } catch (e) {
      console.log(e);
    }

    let rules;
    try {
      rules = await $axios.$get("/api/prediction/type");
    } catch (e) {
      console.log(e);
    }

    return {
      leagues: leagues,
      rules: rules
    };
  },
  data() {
    return {
      currentTable: "league",
      isLoading: true,
      result: {
        teamA: {
          name: "",
          avatar: ""
        },
        teamB: {
          name: "",
          avatar: ""
        },
      },
      hostWinRate: "",
      drawGameRate: "",
      guestWinRate: "",

      leagues: [],
      teams: [],
      rules: [],

      current: {
        league: 1,
        teamA: 1,
        teamB: 4,
        rule: 4
      },

      anim: {},
      step: 0
    };
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.loading,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/star_success.json"
    });
  },
  methods: {
    async _predict() {
        try {
          let res = await this.$axios.$get( `/api/prediction/prediction?host_team_id=${this.current.teamA}&guest_team_id=${this.current.teamB}&type_id=${this.current.rule}`);
          this.hostWinRate = parseInt(res.hostWinRate * 100)
          this.drawGameRate = parseInt(res.drawGameRate * 100)
          this.guestWinRate = parseInt(res.guestWinRate * 100)
          
          this.isLoading = false
        } catch (err) {
            this.$message(err);
        }
    },
    async _getTeamData() {
      //获取team
      try {
        let res = await this.$axios.$get(
          `/api/league/team?league_id=${this.current.league}`
        );
        console.log("111", res);
        this.teams = res;
      } catch (e) {
        console.log(e);
      }
    },
    _changeCurrentTable(step) {
      let index = tableStatesENUM.indexOf(this.currentTable);
      //即将要换上的表格
      let oldTable = tableStatesENUM[index];
      let newTable = tableStatesENUM[index + step];
      if (oldTable === "league" && newTable === "teamA") {
        this._getTeamData();
      } else {

      }
      this.currentTable = newTable;
    },
    onLeagueSelect(val) {
      console.log(val);
      this.current.league = val;
    },
    onTeamASelect(val) {
      console.log(val);
      this.current.teamA = val;
    },
    onTeamBSelect(val) {
      console.log(val);
      this.current.teamB = val;
    },
    onRuleSelect(val) {
      console.log(val);
      this.current.rule = val;
    },
    onBackButtonClick() {
      this.step -= 1;
      this._changeCurrentTable(-1);
    },
    onNextButtonClick() {
      this.step += 1;
      this._changeCurrentTable(1);
    },
    onPredictButtonClick() {
      this.step = 5;
      this._changeCurrentTable(1);
      this._predict();
    }
  }
};
</script>

<style>
.img {
  width: 100px;
  height: 100px;
}

.table-item:hover {
  box-shadow: 0 1px 15px rgba(27, 31, 35, 0.15);
  /* background-color: rgba(27, 31, 35, 0.15); */
}

.selected {
  /* box-shadow: 0 1px 15px rgba(27, 31, 35, 0.15); */
  background-color: #c7d2dc;
  /* background-color: rgba(27, 31, 35, 0.15); */
}

.another {
  /* box-shadow: 0 1px 15px rgba(27, 31, 35, 0.15); */
  background-color: #ffdce0;
}
</style>
