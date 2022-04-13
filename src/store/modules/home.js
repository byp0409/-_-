import { reqNcov, ChinaData } from '@/api/index';
export default {
  namespaced: true,
  actions: {
    // 可能需要日期参数，等遇到再写
    async getNcov({ commit }) {
      let result = await reqNcov();
      if (result.code == 200) {
        commit('GETNCOV', result.newslist);
        return 'ok';
      } else {
        return Promise.reject(new Error('请求疫情数据失败'));
      }
    },
    // 获取国内详细信息
    async ChinaData({ commit }) {
      let result = await ChinaData();
      if (result.codeid == 10000) {
        commit('CHINADATA', result.retdata);
        return 'ok';
      } else {
        return Promise.reject(new Error('请求国内数据失败'));
      }
    },
  },
  mutations: {
    GETNCOV(state, data) {
      // 提前把数据拆分
      state.newslist = data[0];
    },
    CHINADATA(state, data) {
      state.retdata = data;
    },
  },
  state: {
    newslist: {},
    // 国内疫情详细信息
    retdata: [],
  },
  getters: {
    // 新闻列表数据
    news(state) {
      return state.newslist.news || [];
    },
    // 各种人数统计和数据获取时间
    desc(state) {
      return state.newslist.desc || {};
    },
    // 风险地区
    riskarea(state) {
      return state.newslist.riskarea || {};
    },
    // 排序后的国内数据--依据昨日新增
    sortretdata(state) {
      return state.retdata.sort((a, b) => {
        return b.nativeRelative - a.nativeRelative || [];
      });
    },
    // 排序后的国内数据--依据现存确诊
    sortretdatanow(state) {
      return state.retdata.sort((a, b) => {
        return b.curConfirm - a.curConfirm || [];
      });
    },
  },
};
