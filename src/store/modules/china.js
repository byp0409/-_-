import { reqHistory } from '@/api/index';
export default {
  namespaced: true,
  actions: {
    // 国内疫情数据
    async reqHistory({ commit }) {
      let result = await reqHistory();
      // 数据没有状态码，当数据不为空时默认成功
      if (result.data != null) {
        commit('REQHISTORY', result.data);
      }
    },
  },
  mutations: {
    REQHISTORY(state, data) {
      state.chinaData = data;
    },
  },
  state: {
    chinaData: {},
  },
  getters: {
    // 每日历史数据
    chinaDayAddList(state) {
      // 截取30天数据
      return state.chinaData.chinaDayAddList || [];
    },
    // 累计数据
    chinaDayList(state) {
      return state.chinaData.chinaDayList || [];
    },
  },
};
