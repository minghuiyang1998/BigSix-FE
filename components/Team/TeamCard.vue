<template>
  <nuxt-link tag="a" :to="`team/${team.id}`" class="team-card">
    <el-card shadow="hover">
      <div class="d-flex flex-items-center">
        <TeamAvatar class="mr-3" :avatar="team.avatarUrl" />
        <span>{{team.name}}</span>
      </div>
    </el-card>
  </nuxt-link>
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
  color: inherit;
  text-decoration: none;
  display: block;
  a {
    color: inherit;
    text-decoration: none;
  }
}
</style>
