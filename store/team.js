import { Message } from 'element-ui';

export const state = () => ({
  teams: [],

  isFetching: false,
  isCreating: false,
})

export const mutations = {
  SET_TEAMS(state, teams) {
    state.teams = teams
  },

  SET_IS_FETCHING(state, val) {
    state.isFetching = val
  },

  SET_IS_CREATING(state, val) {
    state.isCreating = val
  }
}

export const actions = {
  async getTeamsByLeagues({ commit }, leagueId) {
    try {
      commit('SET_IS_FETCHING', true)
      const res = await this.$axios.$get(`/api/league/team?league_id=${leagueId}`)
      commit("SET_TEAMS", res)
    } catch(e) {
      Message.error("获取队伍列表失败！")
    } finally {
      commit('SET_IS_FETCHING', false)
    }
  },

  async createTeams({ commit }, teams = []) {
    await this.$axios.$post('/api/league/teams', teams)
  }
}
