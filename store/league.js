import { Message } from 'element-ui';

export const state = () => ({
  leagues: [],
  selectedId: null,

  isFetching: false,
  isCreating: false,
})

export const getters = {
  current(state) {
    return state.leagues.find(l => l.id === state.selectedId)
  }
}

export const mutations = {
  UPDATE_SELECTED_ID(state, id) {
    state.selectedId = id
  },

  SET_LEAGUES(state, leagues) {
    state.leagues = leagues
  },

  ADD_LEAGUE(state, league) {
    state.leagues.push(league)
  },

  SET_IS_FETCHING(state, val) {
    state.isFetching = val
  },

  SET_IS_CREATING(state, val) {
    state.isCreating = val
  }
}

export const actions = {
  async selectLeagueById({ commit, dispatch }, id) {
    commit('UPDATE_SELECTED_ID', id);
    await dispatch('team/getTeamsByLeagues', id, { root: true })
    await dispatch('match/getLeagueMatches', id, { root: true })
  },

  async getLeagues({ commit, state, dispatch }) {
    try {
      commit("SET_IS_FETCHING", true)
      const res = await this.$axios.$get('/api/league/league');
      commit("SET_LEAGUES", res)

      if (!res.find(league => league.id === state.selectedId)) {
        await dispatch('selectLeagueById', res[0].id)
      }

    } catch(err) {
      Message.error("无法获取联赛列表");
      console.error(err)
      commit("SET_LEAGUES", [])
    } finally {
      commit("SET_IS_FETCHING", false)
    }
  },
}
