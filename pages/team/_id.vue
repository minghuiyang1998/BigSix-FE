<template>
  <div class="d-flex">
    <aside
      class="position-relative col-md-4 col-lg-3 hide-md hide-sm"
      style="background-color: #58AF9B"
    >
      <img
        v-bind:src="team.avatar"
        style="width: 200px;height: 200px;"
        class="border-dashed border-blue-light circle d-block p-3 mx-auto my-4"
      >
      <p class="h1 text-center text-white">{{team.name}}</p>
      <p class="h6 text-white px-4">{{team.desc}}</p>
    </aside>
    <main class="col-md-8 col-lg-9">
      <div class="mx-4">
        <div
          ref="chartContainer"
          class="bg-white border rounded-2 box-shadow mb-4"
          style="height: 400px"
        ></div>
        <div class="bg-white border rounded-2 box-shadow">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="h4">比赛历史</span>
            </div>
            <div class="d-flex flex-wrap">
              <div v-for="game in historyData.history" :key="game" class="col-md-6 col-sm-12" >
                <div class="border m-2 px-4 pt-4 box-shadow rounded-2" >
                <div class="mb-2 ">
                  <div class="d-flex flex-items-center mb-2">
                    <img v-bind:src="game.avatarA" class="circle mr-2" style="width: 40px;height: 40px;" >
                    <label>{{game.a}}</label>
                    <label class="flex-auto text-right">{{game.scoreA}}</label>
                  </div>
                  <div class="d-flex flex-items-center">
                    <img v-bind:src="game.avatarB" class="circle mr-2" style="width:40px;height:40px;" >
                    <label>{{game.b}}</label>
                    <label class="flex-auto text-right">{{game.scoreB}}</label>
                  </div>
                </div>
                <p class="text-right">{{game.date}}</p>

                  </div>
              </div>
            </div>
            <el-pagination
              class="d-block text-center mt-2"
              layout="prev, pager, next"
              :total="historyData.total"
              :current-page="historyData.currentPage"
              @current-change="onPaginationButtonClick"
            ></el-pagination>
          </el-card>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import echarts from "echarts";
require("../../assets/javascript/customed.js");

export default {
  async asyncData({ $axios }) {
    // const res = await $axios.$get("http://icanhazip.com");
    let historyData = {
      total: 1000,
      currentPage: 1,
      history: [
        {
          a: "aaaaaa",
          avatarA: "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
          scoreA: 1,
          b: "bbbbbb",
          avatarB: "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
          scoreB: 1,
          date: "2016-05-02"
        },
        {
          a: "aaa",
          avatarA: "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
          scoreA: 1,
          b: "bbbb",
          avatarB: "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
          scoreB: 1,
          date: "2016-05-02"
        },
        {
          a: "aaaaaa",
          avatarA: "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
          scoreA: 1,
          b: "bbbbbb",
          avatarB: "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
          scoreB: 1,
          date: "2016-05-02"
        },
        {
          a: "aaaaaa",
          avatarA: "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
          scoreA: 1,
          b: "bbbbbb",
          avatarB: "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
          scoreB: 1,
          date: "2016-05-02"
        },
        {
          a: "aaaaaa",
          avatarA: "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
          scoreA: 1,
          b: "bbbbbb",
          avatarB: "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
          scoreB: 1,
          date: "2016-05-02"
        },
        {
          a: "aaaaaa",
          avatarA: "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
          scoreA: 1,
          b: "bbbbbb",
          avatarB: "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
          scoreB: 1,
          date: "2016-05-02"
        }
      ]
    };

    let chartData = {
      xData: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      yData_win: [820, 932, 901, 934, 1290, 1330, 1320],
      yData_lose: [820, 932, 901, 934, 1290, 1330, 1320]
    };

    let team = {
      avatar: "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
      name: "略略略",
      desc: `any UI concern with displaying a user's credit card on a large desktop screen and having their numbers visible? Could be a security issue. The card elements give a fresh look to the standard elements users see on a finance dashboard but I think it causes more harm than value.`
    };

    return {
      historyData: historyData,
      chartData: chartData,
      team: team
    };
  },
  mounted() {
    let myChart = echarts.init(this.$refs.chartContainer, "customed");
    let option = {
      title: {},
      tooltip: {
        trigger: "axis"
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      toolbox: {},
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: this.chartData.xData
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          itemStyle: {
            normal: {
              color: "#48af98"
            }
          },
          name: "邮件营销",
          type: "line",
          stack: "总量",
          data: this.chartData.yData_win
        },
        {
          itemStyle: {
            normal: {
              color: "#58af98"
            }
          },
          name: "搜索引擎",
          type: "line",
          stack: "总量",
          data: this.chartData.yData_lose
        }
      ]
    };
    myChart.setOption(option);
  },
  data() {
    return {
      team: {
        avatar: "",
        name: "",
        desc: ""
      },
      historyData: {
        total: 0,
        currentPage: 0,
        history: []
      },
      chartData: {
        xData: [],
        yData_win: [],
        yData_lose: []
      }
    };
  },
  methods: {
    _getHistoryData(param){
      // const res = await this.$axios.$get("http://icanhazip.com");
      // this.historyData = res.data.historyData;
    },
    onPaginationButtonClick(val) {
      console.log(val)
    }
  }
};
</script>

<style>
</style>
 