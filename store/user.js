export const state = () => ({
  userInfo: {
    username: "igulu",
    email: 'igulu@example.com',
    avatar: null
  },
  isLogin: false
})

export const actions = {
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
