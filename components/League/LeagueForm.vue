<template>
  <el-form :model="form">
    <el-form-item label="联赛名称" :label-width="formLabelWidth">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="联赛 Logo" :label-width="formLabelWidth" v-loading="uploading">
      <el-upload
        class="avatar-uploader"
        action="/upload"
        name="smfile"
        :show-file-list="false"
        accept="image/*"
        :before-upload="beforeUpload"
        :on-error="handleError"
        :on-success="handleAvatarSuccess"
      >
        <img v-if="form.avatarUrl" :src="form.avatarUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
    <el-form-item label="联赛类型" :label-width="formLabelWidth">
      <el-select v-model="form.leagueType" placeholder="请选择联赛类型">
        <el-option label="足球" value="1"></el-option>
        <el-option label="篮球" value="2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="联赛简介" :label-width="formLabelWidth">
      <el-input type="textarea" v-model="form.introduction" placeholder="介绍下你的联赛吧"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      formLabelWidth: '80px',
      form: {
        name: '',
        leagueType: '1',
        avatarUrl: '',
        introduction: ''
      },
      uploading: false
    }
  },

  methods: {
    handleAvatarSuccess(res, file) {
      this.form.avatarUrl = res.data.url;
      this.uploading = false;
    },

    handleError() {
      this.$message.error("上传失败")
      this.uploading = false;
    },

    formData() {
      return this.form;
    },

    isValid() {
      const form = this.form;
      return !!(form.name && form.leagueType && form.avatarUrl && form.introduction)
    },

    beforeUpload() {
      this.uploading = true;
    },
  }
}
</script>


<style lang="scss">
$size: 100px;

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
