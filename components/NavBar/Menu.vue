<template>
  <div class="i-menu">
    <el-menu class="i-menu-bar" router mode="horizontal" :default-active="path">
      <el-menu-item index="/">首页</el-menu-item>
      <template v-if="isLogin">
        <el-menu-item index="/predict">比赛预测</el-menu-item>
      </template>
      <template v-else>
        <el-menu-item index="/login">登录</el-menu-item>
        <el-menu-item index="/register">注册</el-menu-item>
      </template>
    </el-menu>
    <el-dropdown trigger="click">
      <avatar inline :username="userInfo.username" :size="32"></avatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import Avatar from 'vue-avatar'
import { mapState } from 'vuex';

export default {
  components: {
    Avatar
  },

  data() {
    return {
      path: this.$route.path
    }
  },

  computed: {
    ...mapState('user', ['isLogin', 'userInfo'])
  }
}
</script>

<style scoped>
.i-menu {
  display: flex;
  align-items: center;
}

.i-menu-bar {
  border: none;
}
</style>
