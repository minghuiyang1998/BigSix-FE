<template>
  <section class="bg d-flex flex-justify-center flex-items-center">
    <div class="col-md-8 col-lg-8 text-gray bg-white py-4 px-4">
      <el-steps :active="step" align-center>
        <el-step title="选择联赛" description></el-step>
        <el-step title="选择参赛队" description></el-step>
        <el-step title="选择参赛队" description></el-step>
        <el-step title="预测" description></el-step>
      </el-steps>
      <div v-if="step == 0">
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
          <el-button @click="onNextButtonClick()">下一步</el-button>
        </div>
      </div>
      <div v-if="step == 1">
        <el-table
          ref="singleTable"
          :data="teamAData"
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
      <div v-if="step == 2">
        <el-table
          ref="singleTable"
          :data="teamBData"
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
      <div v-if="step == 4 && isLoading" style="width:200px;height:200px;" class="mx-auto">
        <lottie
          :options="defaultOptions"
          :height="200"
          :width="200"
          v-on:animCreated="handleAnimation"
        />
      </div>
      <div v-if="step == 4 && !isLoading" class="d-flex m-6 flex-justify-between flex-items-center" >
        <div class="flex-auto text-center">
          <img v-bind:src="result.teamA.avatar" class="circle mr-2" style="width: 40px;height: 40px;" >
          <div class="flex-auto h1">{{result.teamA.name}}</div>
        </div>
        <div class="flex-auto d-flex flex-justify-center flex-items-center">
          <label class="h1">{{result.teamA.rate}}</label>
          <label class="mx-4 h1">vs</label>
          <label class="h1">{{result.teamB.rate}}</label>
        </div>
        <div class="flex-auto text-center">
          <img v-bind:src="result.teamB.avatar" class="circle mr-2" style="width:40px;height:40px;">
          <div class="flex-auto h1">{{result.teamB.name}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import loading from "../assets/lottie/confetti.json";
import success from "../assets/lottie/star_success.json";
export default {
  fetchData() {},
  data() {
    return {
      isLoading: true,
      result: {},
      leagueData: [
        {
          name: "league-name"
        }
      ],
      teamAData: [
        {
          name: "team-name_A"
        }
      ],
      teamBData: [
        {
          name: "team-name_B"
        }
      ],
      currentLeague: null,
      currentA: null,
      currentB: null,
      flag: false, //TODO

      defaultOptions: { animationData: success },
      animationSpeed: 1,
      anim: {},
      step: 0
    };
  },

  methods: {
    _predict() {
      setTimeout(() => {
        this.result = {
          teamA: {
            name: "aaa",
            avatar:
              "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
            rate: "50%"
          },
          teamB: {
            name: "bbb",
            avatar:
              "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
            rate: "50%"
          }
        };
        this.isLoading = false;
      }, 5000);
    },
    onLeagueSelect(val) {
      this.currentLeague = val;
      this.step = 1;
      console.log(this.step);
    },
    onTeamASelect(val) {
      this.currentA = val;
      this.step = 2;
      console.log(this.step);
    },
    onTeamBSelect(val) {
      this.currentB = val;
      this.step = 4;
      this._predict();
      console.log(this.step);
    },
    onBackButtonClick() {
      this.step -= 1;
    },
    onNextButtonClick() {
      this.step += 1;
    },
    onPredictButtonClick() {
      this.step = 4;
      this._predict();
    },
    handleAnimation: function(anim) {
      this.anim = anim;
      console.log(anim); //这里可以看到 lottie 对象的全部属性
    }
  }
};
</script>

<style>
.bg {
  background: url("../assets/image/tip-off.png");
  background-position: center;
  background-size: 100vw;
  height: 100vh;
}
</style>
