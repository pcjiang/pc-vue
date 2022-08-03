import { createStore } from 'vuex'
// import { axios } from 'axios'
// Vuex 数据管理框架
// VueX 创建了一个全局唯一的仓库 用来存放全局的数据
export default createStore({
  state: {
    name: 'dell',
    token: true
  },
  getters: {
  },
  mutations: {
    // 同步提交 commit
    changeName(state, val) {
     state.name = val
    },
    change(state, str) {
      state.name += str
      state.token = !state.token
    }
  },
  actions: {
    // 异步提交dispatch
    // axios.get('url')
    // .then((response) => {
    //   const msg = response.data.message; 
    //   store.commit('change', msg);
    // })
    // getData(store, str) {
    //   setTimeout(() => {
    //     axios.post('url', str)
    //     .then((response) => {
    //       const msg = response.data.message;
    //       store.commit('change', msg)
    //     })
    //   }, 2000);
    // },   
    getData(store, str) {
      setTimeout(() => {
        store.commit('change', str);      
      }, 2000);
    }
  },
  modules: {
  }
})
