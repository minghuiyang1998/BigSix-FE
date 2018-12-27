<template>
  <el-card>
    <div class="tools">
      <el-button size="mini" type="primary" @click="$refs.upload.open(league.id)">上传比赛数据<i class="el-icon-upload el-icon--right"></i></el-button>
    </div>
    <div class="section">
      <h4>联赛信息</h4>
      <div class="d-flex flex-justify-between">
        <div class="league-info">
          <p>联赛名称: {{league.name}}</p>
          <p>联赛简介: {{league.intro}}</p>
          <!-- <p>创建时间</p> -->
        </div>
        <div>
          <LeagueAvatar :avatar="league.avatar_url" />
        </div>
      </div>
    </div>
    <div class="section">
      <h4>队伍列表</h4>
      <TeamList />
    </div>
    <div class="section">
      <h4>近期比赛</h4>
    </div>

    <LeagueUpload ref="upload" />
  </el-card>
</template>

<script>
import { TeamList } from '../Team';
import LeagueAvatar from './LeagueAvatar';
import LeagueUpload from './LeagueUpload';

export default {
  props: {
    league: Object
  },

  components: {
    TeamList,
    LeagueAvatar,
    LeagueUpload
  },
  data() {
    return {
      activeNames: []
    }
  },
  methods: {
    handleCommand(command) {
      if (command === 'upload') {
        this.$emit('upload', this.id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  border-top: 1px solid #eee;
  padding: 15px 0;
  margin: 15px 0;

  h4 {
    margin-bottom: 1em;
  }
}

.tools {
  text-align: right;
}
</style>
