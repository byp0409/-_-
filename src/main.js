import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 测试
// import { reqHistory } from '@/api/index';
// console.log(reqHistory());

import echarts from '@/plugins/echarts';
Vue.use(echarts);
// 引入vant
import '@/plugins/vant';
// 引入mock
import '@/mock/mockserve';
// 引入swiper
import '@/plugins/swiper';
// 注册全局组件,顶部标题
import TopBar from '@/components/TopBar/TopBar.vue';
Vue.component('TopBar', TopBar);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
