<template>
  <el-dialog title="上传数据" center :visible.sync="visible" width="600px">
    <div class="upload">
      <el-upload
        ref="upload"
        drag
        action="/api/league/match"
        accept=".csv"
        name="file"
        :data="{ league_id: leagueId }"
        :auto-upload="false"
        @on-success="onSuccess"
        @on-error="onError"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
      </el-upload>
    </div>

    <div slot="footer">
      <el-button @click="handleClose">取消</el-button>
      <el-button type="primary" @click="handleUpload">上传</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      leagueId: null
    }
  },

  methods: {
    handleClose() {
      this.visible = false;
    },

    handleUpload() {
      this.$refs.upload.submit()
    },

    onSuccess() {
      this.$message({
        message: '上传成功',
        type: 'success'
      });
      this.handleClose()
    },

    onError() {
      this.$message.error('上传失败')
    },

    open(leagueId) {
      this.visible = true;
      this.leagueId = leagueId
      // @todo
    }
  }
}
</script>

<style lang="scss">
.upload {
  text-align: center;
  .el-upload-dragger {
    width: 520px;
  }
}
</style>
