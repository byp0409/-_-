import { reqGlobal } from '@/api/index';
export default {
  namespaced: true,
  actions: {
    async reqGlobalData({ commit }) {
      let result = await reqGlobal();
      if (result.retdata != null) {
        commit('REQGLOBALDATA', result.retdata);
        return 'ok';
      } else {
        return Promise.reject(new Error('获取全球疫情信息失败'));
      }
    },
  },
  mutations: {
    REQGLOBALDATA(state, data) {
      state.globaldata = data;
    },
  },
  state: {
    globaldata: {},
  },
  getters: {
    // 顶部总体信息和前十
    totalData(state) {
      return state.globaldata.globalList || [];
    },
    // 全球疫情历史数据，统计图
    theWorldTrend(state) {
      return state.globaldata.theWorldTrend || {};
    },
    caseOutsideList(state) {
      return state.globaldata.caseOutsideList;
    },
  },
};
