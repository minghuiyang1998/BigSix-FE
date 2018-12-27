<template>
  <div>
    <el-table :data="teams">
      <el-table-column label="队伍名称">
        <template slot-scope="scope">
          <el-input type="text" size="mini" placeholder="请输入队伍名称" v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="队伍简介">
        <template slot-scope="scope">
          <el-input type="text" size="mini" placeholder="请输入队伍简介" autosize v-model="scope.row.introduction"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="球队Logo">
        <template slot-scope="scope">
          <TeamAvatar :avatar="scope.row.avatarUrl" />
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="120px">
        <template slot-scope="scope">
          <el-upload
            action="/upload"
            name="smfile"
            :show-file-list="false"
            accept="image/*"
            :on-success="handleAvatarSuccess(scope.row.key)"
          >
            <el-button slot="trigger" size="mini" type="primary">上传队标</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.key)"
            >
              删除
            </el-button>
          </el-upload>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="mt-3" @click="handleAdd">添加一支队伍</el-button>
  </div>
</template>

<script>
import TeamAvatar from './TeamAvatar';
import uid from 'uid';

export default {
  props: {
    leagueId: Number,
  },

  components: {
    TeamAvatar
  },

  data() {
    return {
      formLabelWidth: '80px',
      teams: []
    }
  },

  created() {
    this.handleAdd()
  },

  methods: {
    handleAvatarSuccess(key) {
      const team = this.findTeamByKey(key)
      return (res) => {
        console.log(1)
        if (team) {
          team.avatarUrl = res.data.url
        }
      }
    },

    findTeamByKey(key) {
      return this.teams.find(team => team.key === key)
    },

    handleAdd() {
      this.teams.push({
        key: uid(),
        leagueId: this.leagueId,
        name: '',
        avatarUrl: '',
        introduction: ''
      })
    },

    handleDelete(key) {
      this.teams = this.teams.filter(team => team.key !== key)
    }
  }
}
</script>


<style lang="scss">
$size: 50px;

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: $size;
  height: $size;
  line-height: $size;
  text-align: center;
}
.avatar {
  width: $size;
  height: $size;
  display: block;
}
</style>
