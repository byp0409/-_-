import { reqGlobal } from '@/api/index';
export default {
  namespaced: true,
  actions: {
    async reqGlobalData({ commit }) {
      let result = await reqGlobal();
      if (result.retdata != null) {
        commit('REQGLOBALDATA', result.retdata);
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
  },
};
