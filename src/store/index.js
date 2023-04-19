import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
export default new Vuex.Store({
  //数据，相当于data
  state: {
    count:1,
  },
  getters: {
    
  },
  //里面定义方法，操作state方发
  mutations: {
    add(state, n) {
        state.count = state.count + n;
    },
    reduce(state) {
        state.count--;
    },
    alertNum(_, num) {
        alert(num)
    }
  },
  // 操作异步操作mutation
  actions: {
    // showNum({commit}, num) {
    //     setTimeout(() => {
    //         console.log(num);
    //         commit('alertNum', num)
    //     }, 3000);
    // }
    showNum() {
        setTimeout(() => {
            console.log(33);
        }, 3000);
    }
  },
  modules: {
    
  },
})