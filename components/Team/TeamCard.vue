<template>
  <div class="team-card">
    <el-card shadow="hover">
      <router-link tag="a" :to="`team/${team.id}`" class="d-flex flex-items-center">
        <TeamAvatar class="mr-3" :avatar="team.avatarUrl" />
        <span>{{team.name}}</span>
      </router-link>
    </el-card>
  </div>
</template>

<script>
import TeamAvatar from './TeamAvatar';

export default {
  props: {
    team: Object
  },

  components: {
    TeamAvatar
  }
}
</script>

<style lang="scss" scoped>
.team-card {
  max-width: 300px;
  cursor: pointer;
  a {
    color: inherit;
    text-decoration: none;
  }
}
</style>
