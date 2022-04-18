<template>
  <div class="hotSpot">
    <!-- 标签 -->
    <div class="tittle">
      <div class="left">
        <i></i>
        <img src="./images/yqrd.png" alt="" />
      </div>
      <div class="right">
        <!-- 切换路由 -->
        <a href="#">
          <span>查看更多</span>
          <img src="./images/right.png" alt="" />
        </a>
      </div>
    </div>
    <!-- 主体新闻 -->
    <div class="main">
      <ul>
        <!-- 内容列表 -->
        <li v-for="obj in news" :key="obj.id">
          <div class="content">
            <span class="new">最新</span>
            <span>{{ obj.title }}</span>
          </div>
          <img src="./images/right_small.png" alt="" class="right" />
        </li>
      </ul>
    </div>
    <!-- 底部小导航 -->
    <footer class="nav">
      <router-link to="/askDoctor" class="nav-item">
        <img src="./images/footer1.png" alt="" />
        <span>问医生</span>
      </router-link>
      <router-link to="/detect" class="nav-item">
        <div class="hot"></div>
        <img src="./images/footer2.png" alt="" />
        <span>核酸检测</span>
      </router-link>
      <router-link to="/material" class="nav-item">
        <img src="./images/footer3.png" alt="" />
        <span>防疫物资</span>
      </router-link>
      <router-link to="/travel" class="nav-item">
        <img src="./images/footer4.png" alt="" />
        <span>出行贴士</span>
      </router-link>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'HotSpot',
  computed: {
    ...mapGetters('home', ['news']),
  },
};
</script>

<style lang="less" scoped>
.hotSpot {
  .tittle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 13.0667vw;
    padding: 0 4.2667vw;
    .left {
      display: flex;
      align-items: center;
      i {
        width: 1.0667vw;
        height: 4.2667vw;
        margin-right: 2.1333vw;
        background-color: #4169e2;
      }
      img {
        width: 18.6667vw;
        height: 6.4vw;
      }
    }
    .right {
      display: flex;
      align-items: center;
      img {
        width: 3.2vw;
        height: 3.2vw;
      }
      span {
        font-size: 3.7333vw;
        color: #4169e2;
      }
    }
  }
  .main {
    padding: 0 4.2667vw;
    ul {
      list-style: none;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4vw;
        // 内容
        .content {
          .new {
            margin-right: 1.0667vw;
            padding: 0 0.5333vw;
            font-size: 3.2vw;
            color: #fff;
            background-color: #f74c31;
            border-radius: 0.5333vw;
          }
          span {
            font-size: 4vw;
          }
        }
        img {
          width: 3.2vw;
          height: 3.2vw;
          margin-left: 1.8667vw;
        }
      }
    }
  }
  .nav {
    display: flex;
    padding: 4.2667vw 0;
    border-top: 0.2667vw solid #ebebeb;
    .nav-item {
      position: relative;
      flex: 1;
      align-items: center;
      display: flex;
      flex-direction: column;
      color: #333;
      .hot {
        position: absolute;
        left: 14vw;
        width: 7.4667vw;
        height: 4.2667vw;
        background: url(./images/hot.png);
        background-size: 100%;
      }
      img {
        width: 10.6667vw;
        height: 10.6667vw;
      }
      span {
        font-size: 3.4667vw;
      }
    }
  }
}
</style>
