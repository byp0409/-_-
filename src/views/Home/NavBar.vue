<template>
  <div class="nav">
    <!-- 导航 -->
    <div>
      <router-link to="/home/arearisk" class="item">地区风险</router-link>
      <router-link to="/home/chdata" class="item">国内数据</router-link>
      <router-link to="/home/globaldata" class="item">全球数据</router-link>
      <router-link to="/home/vaccine" class="item">新冠疫苗</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style lang="less" scoped>
.nav {
  // 通过这样的结构给导航添加底色
  background-color: rgb(247, 247, 247);
  div {
    display: flex;
    justify-content: space-around;
    height: 9.6vw;
    background-color: #e6edff;
    border-radius: 3.2vw 3.2vw 0 0;
    .item {
      flex: 1;
      font-size: 4vw;
      text-align: center;
      line-height: 9.6vw;
      color: #404a60;
    }
    // 动态样式
    .active {
      height: 100%;
      line-height: 9.6vw;
      border-radius: 3.2vw 3.2vw 0 0;
      color: #4169e2;
      background-color: #fff;
    }
  }
}
</style>
