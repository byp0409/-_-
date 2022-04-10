import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// 导入模块
import home from './modules/home';

export default new Vuex.Store({
  modules: {
    home,
  },
});
