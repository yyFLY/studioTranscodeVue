// 组装模块并导出 store 的文件
  import Vue from 'vue'
  import Vuex from 'vuex'
  import mine from './modules/mine';
  import club from './modules/club';
  Vue.use(Vuex);
  // 导出需要的模块
  // modules 用于状态维护
  export default new Vuex.Store({
      modules: {
          club,
          mine
     }
  });