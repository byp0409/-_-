<template>
  <div class="home">
    <!-- 主页顶部图片 -->
    <img src="./images/top_image.png" alt="" />
    <p>4,675,885,364 人次已浏览</p>
    <HotSpot />
    <div class="blankspace"></div>
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import HotSpot from './HotSpot/index.vue';
import NavBar from './NavBar.vue';
export default {
  name: 'Home',
  components: {
    HotSpot,
    NavBar,
  },
  mounted() {
    this.getNcov();
    this.getChinaData();
  },
  methods: {
    // 获取疫情数据
    getNcov() {
      this.$store.dispatch('home/getNcov');
    },
    // 获取国内详细数据
    getChinaData() {
      this.$store.dispatch('home/ChinaData');
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  position: relative;
  background-color: #fff;
  // 设置与底部距离
  // margin-top: 4vw;
  img {
    width: 100%;
    z-index: -999;
  }
  p {
    display: block;
    position: absolute;
    top: 24vw;
    left: 6.4667vw;
    font-size: 3.2vw;
    color: #fff;
  }
  .blankspace {
    height: 4vw;
    background-color: rgb(247, 247, 247);
  }
}
</style>
