import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import echarts from '@/plugins/echarts';
Vue.use(echarts);
// 引入vant
import '@/plugins/vant';
// 引入mock
import '@/mock/mockserve';
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
