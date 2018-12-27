<template>
  <div>
    <el-table :data="teams">
      <el-table-column label="球队名称">
        <template slot-scope="scope">
          <el-input v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="球队Logo">
        <template slot-scope="scope">
          <el-input v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleDelete(scope.row.key)"
          >
            上传Logo
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.key)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="mt-3" @click="handleAdd">添加球队</el-button>
  </div>
</template>

<script>
import uid from 'uid';

export default {
  data() {
    return {
      formLabelWidth: '80px',
      form: {
        name: '',
        avatar: '',
      },
      teams: []
    }
  },

  created() {
    this.handleAdd()
  },

  methods: {
    // handleAvatarSuccess(res, file) {
    //   this.form.avatar = URL.createObjectURL(file.raw);
    // },

    handleAdd() {
      this.teams.push({
        key: uid(),
        name: '',
        avatar: '',
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
