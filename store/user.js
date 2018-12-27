export const state = () => ({
  userInfo: null,
  isLogin: false
})

export const actions = {
  async getUser({commit}){
    try {
      const data = await this.$axios.$get(`/api/auth/user`);
      commit('SET_USER', data)
    } catch(e) {
      console.log(e)
    }
  }
}

export const mutations = {
  SET_USER(state, props) {
    state.userInfo = Object.assign({}, state.userInfo, props)
    state.isLogin = true
  }
}
