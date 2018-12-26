<template>
  <!-- <div class="d-flex" style="background:linear-gradient(45deg, #ffffff 50%, #eef1f6 50%); heigth: 100%;" > -->
  <div class="d-flex">
    <!-- <aside class="position-fixed top-0 bottom-0 left-0 right-0 col-md-4 col-lg-3 hide-md hide-sm" style="background-color: #58AF9B" >
      <img v-bind:src="team.avatar" style="width: 200px;" class="border-dashed border-blue-light circle d-block p-3 mx-auto my-4" >
      <p class="h1 text-center text-white">{{team.name}}</p>
      <p class="h6 text-white px-4">{{team.desc}}</p>
    </aside>-->
    <aside
      class="position-relative col-md-4 col-lg-3 hide-md hide-sm"
      style="background-color: #58AF9B"
    >
      <img
        v-bind:src="team.avatar"
        style="width: 200px;"
        class="border-dashed border-blue-light circle d-block p-3 mx-auto my-4"
      >
      <p class="h1 text-center text-white">{{team.name}}</p>
      <p class="h6 text-white px-4">{{team.desc}}</p>
    </aside>
    <main class="col-md-8 col-lg-9">
      <div class="mx-4">
        <div ref="chartContainer" class="bg-white border rounded-2 box-shadow mb-4" style="height: 400px" >
          <!-- <no-ssr>
            <ve-line :data="chartData"></ve-line>
          </no-ssr>-->
        </div>
        <div class="bg-white border rounded-2 box-shadow">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="h4">比赛历史</span>
            </div>
            <div class="d-flex flex-wrap">
              <div
                v-for="game in historyData"
                :key="game"
                class="border m-2 px-4 pt-4 box-shadow rounded-2"
                style="width:48%"
              >
                <div class="mb-2">
                  <div class="d-flex flex-items-center mb-2">
                    <img
                      v-bind:src="game.avatarA"
                      class="circle mr-2"
                      style="width: 40px;height: 40px;"
                    >
                    <label>{{game.a}}</label>
                    <label class="flex-auto text-right">{{game.scoreA}}</label>
                  </div>
                  <div class="d-flex flex-items-center">
                    <img
                      v-bind:src="game.avatarB"
                      class="circle mr-2"
                      style="width:40px;height:40px;"
                    >
                    <label>{{game.b}}</label>
                    <label class="flex-auto text-right">{{game.scoreB}}</label>
                  </div>
                </div>
                <p class="text-right">{{game.date}}</p>
              </div>
            </div>
            <el-pagination
              class="d-block text-center mt-2"
              layout="prev, pager, next"
              :total="1000"
            ></el-pagination>
          </el-card>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  mounted() {
    let myChart = echarts.init(this.$refs.chartContainer);
    myChart.setOption(this.option);
  },
  data() {
    return {
      option: {
        title: {},
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            itemStyle: {
              normal: {
                color:'#48af98'
              }
            },
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            itemStyle: {
              normal: {
                color:'#58af98'
              }
            },
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
      team: {
        avatar: "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
        name: "略略略",
        desc: `any UI concern with displaying a user's credit card on a large desktop screen and having their numbers visible? Could be a security issue. The card elements give a fresh look to the standard elements users see on a finance dashboard but I think it causes more harm than value.`
      },
      historyData: [
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
  }
};
</script>

<style>
</style>
 