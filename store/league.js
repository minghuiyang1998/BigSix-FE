export const state = () => ({
  leagues: [
    {
      id: 1,
      name: 'NBA',
      intro: "The National Basketball Association is a men's professional basketball league in North America; composed of 30 teams. It is widely considered to be the premier men's professional basketball league in the world.",
      avatar_url: "https://theundefeated.com/wp-content/uploads/2017/05/nba-logo.png"
    },
    {
      id: 2,
      name: "La Liga",
      intro: "The Campeonato Nacional de Liga de Primera División, commonly known as La Liga, is the men's top professional football division of the Spanish football league system.",
      avatar_url: "https://files.laliga.es/seccion_logos/laliga-v-300x300_2018.jpg"
    }
  ],
  selectedId: 1
})

export const mutations = {
  UPDATE_SELECTED_ID(state, id) {
    state.selectedId = id
  }
}

export const actions = {
  selectLeagueById({ commit }, id) {
    // @todo
    commit('UPDATE_SELECTED_ID', id)
  }
}
