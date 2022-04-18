# vue-dxys

## 简介
- 移动端
- 该项目是模仿丁香医生疫情动态，由于没有官方数据接口，很多地方不能做到完全一致
- 这是官方网址  http://ncov.dxy.cn/ncovh5/view/pneumonia

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
# 该项目用到的技术
- vue2 vue-router vuex axios swiper echarts mockjs vant组件库
  
# 文件结构
```
vue-dxys
├─ .browserslistrc
├─ babel.config.js
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ api
│  │  ├─ index.js
│  │  ├─ mock.js
│  │  └─ requests.js
│  ├─ App.vue
│  ├─ assets
│  │  ├─ china.js   echarts的中国地图
│  │  ├─ images
│  │  └─ normalize.css  css初始化
│  ├─ components
│  │  ├─ Carrousel  
│  │  │  └─ Carrousel.vue   echarts和swiper结合起来的轮播图
│  │  ├─ Footer.vue   底部组件
│  │  ├─ images
│  │  ├─ Table
│  │  │  └─ Table.vue   表格组件
│  │  └─ TopBar
│  │     └─ TopBar.vue  有蓝色竖线的标题
│  ├─ main.js
│  ├─ mixins
│  │  └─ index.js   计算时间戳
│  ├─ mock  静态数据
│  │  ├─ ChinaData.json
│  │  ├─ Global.json
│  │  ├─ HistoryData.json
│  │  ├─ mockserve.js
│  │  └─ Ncov.json
│  ├─ plugins   引入插件和组件库
│  │  ├─ echarts.js
│  │  ├─ swiper.js
│  │  └─ vant.js
│  ├─ router 
│  │  ├─ index.js
│  │  └─ routes.js
│  ├─ store
│  │  ├─ index.js
│  │  └─ modules
│  │     ├─ china.js
│  │     ├─ global.js
│  │     └─ home.js
│  ├─ util  
│  │  └─ tools.js   千分位转换，数据增减符号，计算时间戳
│  └─ views
│     ├─ AskDoctor                                  问医生
│     │  ├─ AskDoctor.vue
│     │  └─ images
│     ├─ Detect                                   核酸检测
│     │  └─ Detect.vue
│     ├─ Home
│     │  ├─ AreaRisk              国内风险地区
│     │  │  └─ AreaRisk.vue
│     │  ├─ CHdata                国内数据
│     │  │  ├─ CHdata.vue
│     │  │  └─ images
│     │  ├─ GlobalData            全球数据
│     │  │  ├─ CarrouselChart
│     │  │  │  └─ CarrouselChart.vue
│     │  │  └─ GlobalData.vue
│     │  ├─ Home.vue
│     │  ├─ HotSpot             疫情热点和一级路由入口
│     │  │  ├─ images
│     │  │  └─ index.vue
│     │  ├─ images
│     │  ├─ NavBar.vue          二级导航入口
│     │  └─ OtherCity              其他国家
│     │     ├─ OtherCity.vue
│     │     └─ Table              表格组件
│     │        └─ Table.vue
│     ├─ Material               抗疫物资
│     │  ├─ images
│     │  └─ Material.vue
│     └─ Travel                 出行贴士
│        ├─ images
│        └─ Travel.vue
├─ vue.config.js
└─ 日志.md                        开发日志，里面记录一些解决问题的思路、心得和开发过程

```



# 路由结构
app---home----地区风险
    |       |--中国数据
    |       |--全球数据
    |       |--除中国外其他地区数据
    |       
    |--问医生
    |--核酸检测
    |--防疫物资
    |--出行

# 数据接口
- 获取新闻、疫情整体数据变化、风险地区http://api.tianapi.com/ncov/index?key=88857c4de15b5cfd305486ad30ac7609
- 获取国内疫情各地区详细信息 https://yupn.api.storeapi.net/api/94/219?appid=15900&sign=0ef4dab158db0aa765fdec5ed4c5f9bb
- 获取国内疫情历史数据 https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=chinaDayList,chinaDayAddList,nowConfirmStatis,ProvinceCompare
- 获取全球疫情数据 https://yupn.api.storeapi.net/api/94/222?format=json&appid=15900&sign=437bb7237d774ae0b057c429f8c1bb7f

# mock数据
- 由于接口有使用次数限制，使用mockjs把每个请求结果进行备份。也就是有两套请求，一套请求实时数据另一套请求保存的静态数据