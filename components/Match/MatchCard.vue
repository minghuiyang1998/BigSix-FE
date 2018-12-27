<template>
  <el-card>
    <div class="match-card">
      <div class="date">
        {{date}}
      </div>
      <div class="d-flex flex-items-center flex-auto flex-justify-around">
        <div class="team flex-justify-end">
          <div class="team-name">{{match.hostTeamName}}</div>
          <TeamAvatar :avatar="match.hostTeamAvatarUrl" />
        </div>
        <div class="vs">
          <div class="vs-score" :style="`color:${hostColor}`">{{match.hostTeamScore}}</div>
          <span class="vs-text"> - </span>
          <div class="vs-score" :style="`color:${guestColor}`">{{match.guestTeamScore}}</div>
        </div>
        <div class="team">
          <TeamAvatar :avatar="match.guestTeamAvatarUrl" />
          <div class="team-name">{{match.guestTeamName}}</div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import dayjs from 'dayjs';
import {TeamAvatar} from '../Team'

export default {
  props: {
    match: Object
  },

  components: {
    TeamAvatar
  },

  computed: {
    date() {
      return dayjs(this.match.matchDate).format('YYYY 年 MM 月 DD 日')
    },

    hostColor() {
      if (this.match.hostTeamScore > this.match.guestTeamScore) {
        return '#08a500'
      } else if (this.match.hostTeamScore < this.match.guestTeamScore) {
        return '#e40a0a'
      } else {
        return '#e4db0a'
      }
    },

    guestColor() {
      if (this.match.hostTeamScore < this.match.guestTeamScore) {
        return '#08a500'
      } else if (this.match.hostTeamScore > this.match.guestTeamScore) {
        return '#e40a0a'
      } else {
        return '#e4db0a'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.match-card {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .date {
    color: #999;
    padding: 20px 20px 20px 0;
    margin-right: 12px;
    border-right: 1px solid #eee;
  }

  .team {
    display: flex;
    width: 40%;
    > * {
      margin: 4px;
    }
  }

  .vs {
    display: flex;
    &-text {
      color: #666;
    }

    &-score {
      font-weight: bold;
      margin: 0 2px;
    }
  }
}
</style>
