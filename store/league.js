import { Message } from 'element-ui';

export const state = () => ({
  leagues: [
    {
      id: 1,
      name: 'NBA',
      leagueType: 2,
      introduction: "The National Basketball Association is a men's professional basketball league in North America; composed of 30 teams. It is widely considered to be the premier men's professional basketball league in the world.",
      avatarUrl: "https://theundefeated.com/wp-content/uploads/2017/05/nba-logo.png"
    },
    {
      id: 2,
      name: "La Liga",
      leagueType: 1,
      introduction: "The Campeonato Nacional de Liga de Primera División, commonly known as La Liga, is the men's top professional football division of the Spanish football league system.",
      avatarUrl: "https://files.laliga.es/seccion_logos/laliga-v-300x300_2018.jpg"
    }
  ],
  selectedId: 1,

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
    if (!state.selectedId)
      state.selectedId = leagues[0].id
  },

  ADD_LEAGUE(state, league) {
    state.league.push(league)
  },

  SET_IS_FETCHING(state, val) {
    state.isFetching = val
  },

  SET_IS_CREATING(state, val) {
    state.isCreating = val
  }
}

export const actions = {
  selectLeagueById({ commit, dispatch }, id) {
    commit('UPDATE_SELECTED_ID', id);
    dispatch('team/getTeamsByLeagues', id)
  },

  async getLeagues({ commit }) {
    try {
      commit("SET_IS_FETCHING", true)
      const res = await this.$axios.$get('/api/league/league');
      commit("SET_LEAGUES", res)
    } catch(err) {
      Message.error("无法获取联赛列表");
    } finally {
      commit("SET_IS_FETCHING", false)
    }
  },

  async createLeague({ commit }, { name, introduction, avatarUrl, leagueType }) {
    try {
      commit("SET_IS_CREATING", true)
      const league = await this.$axios.$post('/api/league/league', {
        name,
        introduction,
        avatarUrl,
        leagueType: Number(leagueType),
      });
      commit('ADD_LEAGUE', league);
    } catch(err) {
      Message.error("无法创建联赛列表");
    } finally {
      commit("SET_IS_CREATING", false)
    }
  }
}
