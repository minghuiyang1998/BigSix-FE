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
        <el-step title="预测" description></el-step>
      </el-steps>
      <div v-if="currentTable === 'league'" key="0">
        <el-table
          ref="singleTable"
          :data="leagueData"
          highlight-current-row
          @row-click="onLeagueSelect"
          style="width: 100%"
        >
          <el-table-column align="center" property="name" label="联赛名称"></el-table-column>
        </el-table>
        <div class="d-flex mt-4 flex-justify-between flex-items-center">
          <el-button disabled>上一步</el-button>
          <el-button @click="onNextButtonClick()" >下一步</el-button>
        </div>
      </div>
      <div v-else-if="currentTable === 'teamA'" key="1">
        <el-table
          ref="singleTable"
          :data="teamData"
          highlight-current-row
          @row-click="onTeamASelect"
          style="width: 100%"
        >
          <el-table-column align="center" property="name" label="球队名称"></el-table-column>
        </el-table>
        <div class="d-flex mt-4 flex-justify-between flex-items-center">
          <el-button @click="onBackButtonClick()">上一步</el-button>
          <el-button @click="onNextButtonClick()">下一步</el-button>
        </div>
      </div>
      <div v-else-if="currentTable === 'teamB'" key="2">
        <el-table
          ref="singleTable"
          :data="teamData"
          highlight-current-row
          @row-click="onTeamBSelect"
          style="width: 100%"
        >
          <el-table-column align="center" property="name" label="球队名称"></el-table-column>
        </el-table>
        <div class="d-flex mt-4 flex-justify-between flex-items-center">
          <el-button @click="onBackButtonClick()">上一步</el-button>
          <el-button @click="onPredictButtonClick()">开始预测</el-button>
        </div>
      </div>
      <div v-else-if="currentTable === 'predict'">
        <div v-if="isLoading" style="width:200px;height:200px;" class="mx-auto">
          <div ref="lavContainer" class="position-absolute left-0 right-0 mx-auto " style="width: 200px; height: 200px; top:-100px;"></div>
        </div>
        <div v-else class="d-flex m-6 flex-justify-between flex-items-center">
          <div class="text-center">
            <img
              v-bind:src="result.teamA.avatar"
              class="circle mr-2"
              style="width: 40px;height: 40px;"
            >
            <div class="flex-auto h1">{{result.teamA.name}}</div>
          </div>
          <el-progress
            :percentage="result.rate"
            class="flex-auto mx-6"
            :stroke-width="18"
            color="#57B08F"
          ></el-progress>
          <div class="text-center">
            <img
              v-bind:src="result.teamB.avatar"
              class="circle mr-2"
              style="width:40px;height:40px;"
            >
            <div class="flex-auto h1">{{result.teamB.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const tableStatesENUM = ["league", "teamA", "teamB",'predict'];
import lottie from "lottie-web";

export default {
  async asyncData({ $axios }) {
     let leagueData = [
        {
          name: "league-name"
        },
        {
          name: "league-name"
        },
        {
          name: "league-name"
        },
        {
          name: "league-name"
        }]

    let teamData = [
        {
          name: "team-name_A"
        },
        {
          name: "team-name_A"
        },
        {
          name: "team-name_A"
        },
        {
          name: "team-name_A"
        },
      ]
    return {
      leagueData: leagueData,
      teamData: teamData,
    };
  },
  data() {
    return {
      currentTable: "league",
      isLoading: true,
      result: {},
      leagueData: [],
      teamData: [],

      currentLeague: null,
      currentA: null,
      currentB: null,

      // anim: {},
      step: 0
    };
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/star_success.json",
    });
  },
  methods: {
    _predict() {

      setTimeout(() => {
        this.result = {
          teamA: {
            name: "aaa",
            avatar:
              "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
          },
          teamB: {
            name: "bbb",
            avatar:
              "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
          },
          rate: '50'
        };
        this.isLoading = false;
      }, 5000);
    },
    _changeCurrentTable(step){
      let index = tableStatesENUM.indexOf(this.currentTable);
      this.currentTable = tableStatesENUM[index + step];
    },
    onLeagueSelect(val) {
      this.currentLeague = val;
      this.step = 1;
    },
    onTeamASelect(val) {
      this.currentA = val;
      this.step = 2;
    },
    onTeamBSelect(val) {
      this.currentB = val;
      this.step = 3;
    },
    onBackButtonClick() {
      this.step -= 1;
      this._changeCurrentTable(-1)
    },
    onNextButtonClick() {
      this._changeCurrentTable(1)
    },
    onPredictButtonClick() {
      this.step = 4;
      this._changeCurrentTable(1)
      this._predict();
    }
  }
};
</script>

<style>
</style>
