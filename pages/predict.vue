<template>
  <section
    class="d-flex flex-justify-center flex-items-center"
    style="background: linear-gradient(-60deg,#fff 40%,  #57B08F 40%) ; height: 100vh;"
  >
    <div class="col-md-8 col-lg-8 text-gray bg-white py-4 px-4 rounded-2 border box-shadow-large">
      <el-steps :active="step" finish-status="success" align-center>
        <el-step title="选择联赛" description></el-step>
        <el-step title="选择参赛队" description></el-step>
        <el-step title="选择参赛队" description></el-step>
        <el-step title="选择赛制" description></el-step>
        <el-step title="预测" description></el-step>
      </el-steps>

      <div v-if="currentTable === 'league'">
        <el-table
          ref="league"
          :data="leagueData.leagues"
          @row-click="onLeagueSelect"
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column align="center" property="name" label="联赛名称" row-key="lid"></el-table-column>
        </el-table>
        <div class="d-flex mt-4 flex-justify-between flex-items-center">
          <el-button disabled>上一步</el-button>
          <el-button @click="onNextButtonClick()">下一步</el-button>
        </div>
      </div>

      <div v-else-if="currentTable === 'teamA'">
        <el-table
          ref="teamA"
          :data="teamData.teams"
          @row-click="onTeamASelect"
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column align="center" property="name" label="球队名称" row-key="tid"></el-table-column>
        </el-table>
        <div class="d-flex mt-4 flex-justify-between flex-items-center">
          <el-button @click="onBackButtonClick()">上一步</el-button>
          <el-button @click="onNextButtonClick()">下一步</el-button>
        </div>
      </div>

      <div v-else-if="currentTable === 'teamB'">
        <el-table
          ref="teamB"
          :data="teamData.teams"
          highlight-current-row
          @row-click="onTeamBSelect"
          style="width: 100%"
        >
          <el-table-column align="center" property="name" label="球队名称" row-key="tid"></el-table-column>
        </el-table>
        <div class="d-flex mt-4 flex-justify-between flex-items-center">
          <el-button @click="onBackButtonClick()">上一步</el-button>
          <el-button @click="onNextButtonClick()">下一步</el-button>
        </div>
      </div>

      <div v-else-if="currentTable === 'rule'">
        <el-table
          ref="rule"
          :data="ruleData.rules"
          highlight-current-row
          @row-click="onRuleSelect"
          style="width: 100%"
        >
          <el-table-column align="center" property="rule" label="赛制" row-key="rid"></el-table-column>
        </el-table>
        <div class="d-flex mt-4 flex-justify-between flex-items-center">
          <el-button @click="onBackButtonClick()">上一步</el-button>
          <el-button @click="onPredictButtonClick()">开始预测</el-button>
        </div>
      </div>

      <div v-else-if="currentTable === 'predict'">
        <div v-if="isLoading" ref="lavContainer" style="width: 200px; height: 200px;"></div>
        <div v-else class="d-flex m-6 flex-items-center">
          <div class="col-3 text-center">
            <img v-bind:src="result.teamA.avatar" class="img circle mr-2">
            <div class="h1">{{result.teamA.name}}</div>
          </div>
          <div class="col-6 mx-6">
            <el-progress :percentage="result.winRate" :stroke-width="8" class="my-2"></el-progress>
            <el-progress
              :percentage="result.loseRate"
              color="#8e71c7"
              :stroke-width="8"
              class="my-2"
            ></el-progress>
            <el-progress :percentage="result.rate" color="#ec6a6a" :stroke-width="8" class="my-2"></el-progress>
          </div>
          <div class="col-3 text-center">
            <img v-bind:src="result.teamB.avatar" class="img circle mr-2">
            <div class="flex-auto h1">{{result.teamB.name}}</div>
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
  async asyncData({ $axios }) {
    let leagueData = {
      default: 1,
      leagues: [
        {
          lid: 1,
          name: "league-name"
        },
        {
          lid: 2,
          name: "league-name"
        },
        {
          lid: 3,
          name: "league-name"
        },
        {
          lid: 4,
          name: "league-name"
        }
      ]
    };

    let teamData = {
      default: 1,
      teams: [
        {
          tid: 1,
          name: "team-name_A"
        },
        {
          tid: 2,
          name: "team-name_A"
        },
        {
          tid: 3,
          name: "team-name_A"
        },
        {
          tid: 4,
          name: "team-name_A"
        }
      ]
    };

    let ruleData = {
      default: 1,
      rules: [
        {
          rid: 1,
          rule: "1 vs 1"
        },
        {
          rid: 2,
          rule: "1 vs 1"
        },
        {
          rid: 3,
          rule: "1 vs 1"
        },
        {
          rid: 4,
          rule: "1 vs 1"
        },
        {
          rid: 5,
          rule: "1 vs 1"
        },
        {
          rid: 6,
          rule: "1 vs 1"
        }
      ]
    };
    return {
      leagueData: leagueData,
      teamData: teamData,
      ruleData: ruleData,
      [`current.league`]:leagueData.default,
      [`current.teamA`]:teamData.default,
      [`current.teamB`]:teamData.default,
      [`current.rule`]:ruleData.default,
    };
  },
  data() {
    return {
      currentTable: "league",
      isLoading: true,
      result: {
        teamA: {
          name:'',
          avatar:''
        },
        teamB: {
          name:'',
          avatar:''
        },
        winRate: "",
        loseRate: "",
        rate: ""
      },

      leagueData: {
        default: 0,
        leagues: []
      },
      teamData: {
        default: 0,
        teams: []
      },
      ruleData: {
        default: 0,
        rules: []
      },

      current: {
        league: 1,
        teamA: 1,
        teamB: 1,
        rule: 1
      },

      anim: {},
      step: 0
    };
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/star_success.json"
    });
  },
  methods: {
    _predict() {
      setTimeout(() => {
        this.result = {
          teamA: {
            name: "aaa",
            avatar: "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4"
          },
          teamB: {
            name: "bbb",
            avatar: "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4"
          },
          winRate: 30,
          loseRate: 60,
          rate: 90
        };
        this.isLoading = false;
      }, 500);
    },
    _changeCurrentTable(step) {
      let index = tableStatesENUM.indexOf(this.currentTable);
      let table = tableStatesENUM[index + step];

      this.currentTable = table;
      console.log(this.current[table]);
      this.$refs[table].setCurrentRow();
    },
    onLeagueSelect(val) {
      console.log(val);
      this.current.league = val;
      this.step = 1;
    },
    onTeamASelect(val) {
      console.log(val);
      this.current.teamA = val;
      this.step = 2;
    },
    onTeamBSelect(val) {
      console.log(val);
      this.current.teamB = val;
      this.step = 3;
    },
    onRuleSelect(val) {
      console.log(val);
      this.current.rule = val;
      this.step = 4;
    },
    onBackButtonClick() {
      this.step -= 1;
      this._changeCurrentTable(-1);
    },
    onNextButtonClick() {
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
</style>
