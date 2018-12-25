<template>
  <div class="d-flex" style="background:linear-gradient(#ffffff 25%, #eef1f6 25%); heigth: 100%;">
    <aside class="position-fixed top-0 bottom-0 left-0 right-0 col-md-4 col-lg-3 hide-md hide-sm" style="background-color: #58AF9B" >
      <img v-bind:src="team.avatar" style="width: 200px;" class="border-dashed border-blue-light circle d-block p-3 mx-auto my-4" >
      <p class="h1 text-center text-white">{{team.name}}</p>
      <p class="h6 text-white px-4">{{team.desc}}</p>
    </aside>
    <aside class="position-relative col-md-4 col-lg-3 hide-md hide-sm" style="visibility: hidden;">
      <div class="position-absolute m-4 top-0 left-0 right-0 bottom-0 bg-white border rounded-2"></div>
    </aside>
    <main class="col-md-8 col-lg-9">
      <div class="m-4">
        <div class="bg-white border rounded-2 box-shadow mb-4" style="height: 400px">
          <ve-line :data="chartData"></ve-line>
        </div>
        <div class="bg-white border rounded-2 box-shadow">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>比赛历史</span>
            </div>
            <div v-for="game in historyData" :key="game" class="border-bottom">
              <div class="d-flex flex-justify-center flex-items-center mb-4">
                <div class="d-flex flex-justify-center flex-items-center">
                  <img
                    v-bind:src="game.avatarA"
                    class="circle mr-2"
                    style="width: 40px;height: 40px;"
                  >
                  <label class="flex-auto text-center h1">{{game.a}}</label>
                </div>
                <div class="flex-auto d-flex flex-justify-center flex-items-center">
                  <label class="h1">{{game.scoreA}}</label>
                  <label class="mx-4 h1">vs</label>
                  <label class="h1">{{game.scoreB}}</label>
                </div>
                <div class="d-flex flex-justify-center flex-items-center">
                  <img
                    v-bind:src="game.avatarB"
                    class="circle mr-2"
                    style="width:40px;height:40px;"
                  >
                  <label class="flex-auto text-center h1">{{game.b}}</label>
                </div>
              </div>
              <p class="text-right">{{game.date}}</p>
            </div>
          </el-card>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import VeLine from "v-charts/lib/line.common";
export default {
  components: { VeLine },
  data() {
    return {
      team: {
        avatar: "https://avatars2.githubusercontent.com/u/1523580?s=460&v=4",
        name: "略略略",
        desc: `any UI concern with displaying a user's credit card on a large desktop screen and having their numbers visible? Could be a security issue. The card elements give a fresh look to the standard elements users see on a finance dashboard but I think it causes more harm than value.`
      },
      chartData: {
        columns: ["date", "PV"],
        rows: [
          { date: "01-01", PV: 1231 },
          { date: "01-02", PV: 1223 },
          { date: "01-03", PV: 2123 },
          { date: "01-04", PV: 4123 },
          { date: "01-05", PV: 3123 },
          { date: "01-06", PV: 7123 }
        ]
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
 