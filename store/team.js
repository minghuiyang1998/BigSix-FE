import { Message } from 'element-ui';

export const state = () => ({
  teams: []
})

export const mutations = {
  SET_TEAMS(state, teams) {
    state.teams = teams
  }
}

export const actions = {
  async getTeamsByLeagues({ commit }, leagueId) {
    try {
      const res = await this.$axios.$get(`/api/league/team?league_id=${leagueId}`)
      commit("SET_TEAMS", res)
    } catch(e) {
      Message.error("获取队伍列表失败！")
    }
  }
}
