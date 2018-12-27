<template>
  <div class="team-card">
    <el-card shadow="hover">
      Team1
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    avatar: String,
  }
}
</script>

<style lang="scss" scoped>
.team-card {
  max-width: 300px;
  cursor: pointer;
}
</style>
