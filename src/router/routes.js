export default [
  {
    // 路由重定向，默认home为首页
    path: '*',
    redirect: '/home/arearisk',
  },
  // 一级主页路由
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/Home/Home.vue'),
    meta: { show: true },
    children: [
      {
        name: 'arearisk',
        path: 'arearisk',
        component: () => import('@/views/Home/AreaRisk/AreaRisk.vue'),
        meta: { name: 'arearisk', show: true },
      },
      {
        name: 'chdata',
        path: 'chdata',
        component: () => import('@/views/Home/CHdata/CHdata.vue'),
        meta: { name: 'chdata', show: true },
      },
      {
        name: 'globaldata',
        path: 'globaldata',
        component: () => import('@/views/Home/GlobalData/GlobalData.vue'),
        meta: { name: 'globaldata', show: true },
      },
      {
        name: 'othercity',
        path: 'othercity',
        component: () => import('@/views/Home/OtherCity/OtherCity.vue'),
        meta: { name: 'othercity', show: true },
      },
    ],
  },
  // 问医生
  {
    path: '/askDoctor',
    component: () => import('@/views/AskDoctor/AskDoctor.vue'),
  },
  // 核酸检测
  {
    path: '/detect',
    component: () => import('@/views/Detect/Detect.vue'),
  },
  // 防疫物资
  {
    path: '/material',
    component: () => import('@/views/Material/Material.vue'),
  },
  // 出行
  {
    path: '/travel',
    component: () => import('@/views/Travel/Travel.vue'),
  },
];
