<template>
  <div class="d-flex">
    <aside
      class="position-relative col-md-4 col-lg-3 hide-md hide-sm"
      style="background-color: #3B3F47"
    >
      <img
        v-bind:src="team.avatarUrl"
        style="width: 200px;height: 200px;"
        class="border-dashed border-blue-light circle d-block p-3 mx-auto my-4"
      >
      <p class="h1 text-center text-white">{{team.name}}</p>
      <p class="h6 text-white px-4">{{team.introduction}}</p>
    </aside>
    <main class="col-md-8 col-lg-9">
      <div class="mx-4">

        <el-card class="mb-5">
          <h4 slot="header">近期得分失分统计</h4>
            <no-ssr>
              <vue-frappe
                id="test"
                :labels="chartData.xData"
                type="axis-mixed"
                :height="300"
                :colors="['#08a500', '#e40a0a']"
                :dataSets="ds">
            </vue-frappe>
          </no-ssr>
            <!-- <div
              ref="chartContainer"
              class="bg-white border rounded-2 box-shadow mb-4"
              style="height: 400px"
            ></div> -->
        </el-card>
        <div class="bg-white border rounded-2 box-shadow">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="h4">比赛历史</span>
            </div>
            <MatchList :matches="history" />
            <!-- <div class="d-flex flex-wrap">
              <div v-for="game in history" :key="game" class="col-md-6 col-sm-12">
                <div class="border m-2 px-4 pt-4 box-shadow rounded-2">
                  <div class="mb-2">
                    <div class="d-flex flex-items-center mb-2">
                      <img
                        v-bind:src="game.hostTeamAvatarUrl"
                        class="circle mr-2"
                        style="width: 40px;height: 40px;"
                      >
                      <label>{{game.hostTeamName}}</label>
                      <label class="flex-auto text-right">{{game.hostTeamScore}}</label>
                    </div>
                    <div class="d-flex flex-items-center">
                      <img
                        v-bind:src="game.guestTeamAvatarUrl"
                        class="circle mr-2"
                        style="width:40px;height:40px;"
                      >
                      <label>{{game.guestTeamName}}</label>
                      <label class="flex-auto text-right">{{game.guestTeamScore}}</label>
                    </div>
                  </div>
                  <p class="text-right">{{game.matchDate}}</p>
                </div>
              </div>
            </div>
            <el-pagination
              v-show="historyData.total > 6"
              class="d-block text-center mt-2"
              layout="prev, pager, next"
              :total="historyData.total"
              :current-page="historyData.currentPage"
              @current-change="onPaginationButtonClick"
            ></el-pagination> -->
          </el-card>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// import echarts from "echarts";
import { MatchList } from '@/components/Match';

// require("../../assets/javascript/customed.js");

export default {
  components: {
    MatchList,
  },

  head() {
    return {
      title: '队伍详情：' + this.team.name
    }
  },

  async asyncData({ params, $axios }) {
    let team;
    try {
      let res = await $axios.$get(`/api/league/team/${params.id}`);
      team = res;
    } catch (e) {
    }

    let history;
    let xData = [],
      yData_lose = [],
      yData_win = [];
    try {
      let res = await $axios.$get(`/api/league/match?team_id=${params.id}`);
      res.map((match) => {
        xData.push(match.matchDate.replace(/(\d{4})(\d{2})(\d{2})/, '$2月$3日'));
        yData_lose.push(match.guestTeamScore);
        yData_win.push(match.hostTeamScore);
        return match
      });
      history = res;
      console.log(res);
    } catch (e) {
      console.log(e);
    }

    return {
      history: history,
      chartData: { xData, yData_lose, yData_win },
      team: team
    };
  },
  mounted() {
    // let myChart = echarts.init(this.$refs.chartContainer, "customed");
    // let option = {
    //   title: {},
    //   tooltip: {
    //     trigger: "axis"
    //   },
    //   grid: {
    //     left: "3%",
    //     right: "4%",
    //     bottom: "3%",
    //     containLabel: true
    //   },
    //   toolbox: {},
    //   xAxis: {
    //     type: "category",
    //     boundaryGap: false,
    //     data: this.chartData.xData
    //   },
    //   yAxis: {
    //     type: "value"
    //   },
    //   series: [
    //     {
    //       itemStyle: {
    //         normal: {
    //           color: "#08a500"
    //         }
    //       },
    //       name: "得分",
    //       type: "line",
    //       data: this.chartData.yData_win
    //     },
    //     {
    //       itemStyle: {
    //         normal: {
    //           color: "#e40a0a"
    //         }
    //       },
    //       name: "失分",
    //       type: "line",
    //       data: this.chartData.yData_lose
    //     }
    //   ]
    // };
    // myChart.setOption(option);
  },
  data() {
    return {
      team: {
        avatarUrl: "",
        name: "",
        Introduction: ""
      },
      historyData: {
        total: 0,
        currentPage: 0
      },
      history: [],
      chartData: {
        xData: [],
        yData_win: [],
        yData_lose: []
      }
    };
  },

  computed: {
    ds() {
      return [{
          name: "得分", chartType: "line", values: this.chartData.yData_win
        }, {
          name: "失分", chartType: "line", values: this.chartData.yData_lose
        }]
    }
  },
  methods: {
    // onPaginationButtonClick(val) {
    //   console.log(val);
    // }
  }
};
</script>

<style>
</style>
