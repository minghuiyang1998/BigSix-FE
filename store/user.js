export const state = () => ({
  userInfo: null,
  isLogin: false
})

export const actions = {
  async getUser({dispatch}){
    try {
      let data = await $axios.$get(`/api/auth/user`);
      dispatch('setUser', data)
    } catch(e) {
      console.log(e)
    }
  },
  setUser({ commit }, user) {
    console.log('setUser!')
    commit('setUserInfo', user)
  }
}

export const mutations = {
  setUserInfo(state, props) {
    state.userInfo = Object.assign({}, state.userInfo, props)
    state.isLogin = true
  }
}
