import Vue from 'vue';
import VueRouter from 'vue-router';
// 导入路由规则
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active',
});

export default router;
