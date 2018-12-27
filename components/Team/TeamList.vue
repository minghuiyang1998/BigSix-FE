<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <h3>队伍列表</h3>
      </div>
      <team-card></team-card>
    </el-card>
  </div>
</template>

<script>
import TeamCard from './TeamCard';

export default {
  components: {
    TeamCard
  }
}
</script>
