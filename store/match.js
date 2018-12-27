import { Message } from 'element-ui';

export const state = () => ({
  leagueMatches: [],
  isLeagueMatchesLoading: false,

  teamMatches: [],
  isTeamMatchesLoading: false,
})

export const mutations = {
  SET_LEAGUE_MATCHES(state, matches) {
    state.leagueMatches = matches
  },

  SET_LEAGUE_MATCHES_LOADING(state, val) {
    state.isLeagueMatchesLoading = val
  },

  SET_TEAM_MATCHES(state, matches) {
    state.teamMatches = matches
  },

  SET_TEAM_MATCHES_LOADING(state, val) {
    state.isTeamMatchesLoading = val
  },
}

export const actions = {
  async getLeagueMatches({ commit }, leagueId) {
    try {
      commit('SET_LEAGUE_MATCHES_LOADING', true)
      const matches = await this.$axios.$get(`/api/league/match?league_id=${leagueId}`)
      commit('SET_LEAGUE_MATCHES', matches)
    } catch (error) {
      Message.error('获取联赛比赛记录失败！')
      console.error(error)
      commit('SET_LEAGUE_MATCHES', [])
    } finally {
      commit('SET_LEAGUE_MATCHES_LOADING', false)
    }
  },

  async getTeamMatches({ commit }, teamId) {
    try {
      commit('SET_TEAM_MATCHES_LOADING', true)
      const matches = await this.$axios.$get(`/api/league/match?team_id=${teamId}`)
      commit('SET_TEAM_MATCHES', matches)
    } catch (error) {
      Message.error('获取联赛比赛记录失败！')
      console.error(error)
      commit('SET_TEAM_MATCHES', [])
    } finally {
      commit('SET_TEAM_MATCHES_LOADING', false)
    }
  }
}
