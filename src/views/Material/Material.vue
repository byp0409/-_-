<template>
  <!-- 防疫物资 -->
  <div class="material">
    <van-nav-bar title="防疫物资" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 顶部 -->
    <div class="top">
      <img src="./images/top.png" alt="" />
    </div>
    <div class="content">
      <div class="nav">
        <span
          :class="{ active: active == index }"
          v-for="(name, index) in navName"
          :key="index"
          @click="change(index)"
        >
          {{ name }}
        </span>
      </div>
      <!-- 轮播图 -->
      <div class="swiper">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide>
            <div class="title">
              <i></i>
              <span>消毒剂指南</span>
              <i></i>
            </div>
            <img src="./images/01.png" alt="" />
            <img src="./images/02.png" alt="" />
            <img src="./images/03.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <div class="title">
              <i></i>
              <span>口罩指南</span>
              <i></i>
            </div>
            <img src="./images/04.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <div class="title">
              <i></i>
              <span>洗手液指南</span>
              <i></i>
            </div>
            <img src="./images/05.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <div class="title">
              <i></i>
              <span>温度计指南</span>
              <i></i>
            </div>
            <img src="./images/06.png" alt="" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="buy">
      <div class="button">
        <span>抗疫物资购买</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Material',
  data() {
    let that = this;
    return {
      active: 0,
      navName: ['消毒液', '口罩', '洗手液', '温度计'],
      // swiper配置项
      swiperOptions: {
        on: {
          slideChangeTransitionEnd: function () {
            that.active = this.activeIndex;
          },
        },
      },
    };
  },
  methods: {
    // 退出
    onClickLeft() {
      this.$router.back();
    },
    change(index) {
      this.active = index;
      this.swiper.slideTo(index, 1000, false);
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<style lang="less" scoped>
.material {
  background-color: rgb(51, 67, 255);
  .top {
    width: 100%;
    margin-bottom: -1.0667vw;
    img {
      width: 100%;
    }
  }
  .content {
    padding: 4.2667vw;
    .nav {
      position: sticky;
      top: 0;
      z-index: 1000;
      display: flex;
      justify-content: space-between;
      padding: 2.2667vw 0;
      background-color: rgb(51, 67, 255);
      span {
        color: #fff;
        background-color: rgb(104, 116, 255);
        width: 20.48vw;
        height: 6.4vw;
        text-align: center;
        line-height: 6.4vw;
        font-size: 3.7333vw;
        border-radius: 0.5vw;
      }
      .active {
        background-color: rgb(247, 130, 7);
      }
    }
    .swiper {
      // position: relative;
      background-color: #fff;
      border-radius: 0.8vw;
      padding: 3.2vw;
      .swiper-slide {
        height: 1px;
      } /* 随意指定一个height值即可 */
      .swiper-slide-active {
        height: auto;
      }
      .title {
        text-align: center;
        span {
          font-size: 5.3333vw;
          padding: 0 3.2667vw;
        }
        i {
          display: inline-block;
          width: 4vw;
          height: 0.5333vw;
          margin-bottom: 1.2667vw;
          background-color: rgb(204, 204, 204);
        }
      }
      img {
        width: 100%;
      }
    }
  }
  .buy {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 9999;
    background-color: rgb(51, 67, 255);
    box-shadow: 0 0vw 4vw 0.5vw rgba(0, 0, 0, 0.3);
    padding: 1.5333vw 9.3333vw;
    .button {
      background-color: rgb(247, 76, 49);
      border-radius: 5.3333vw;
      height: 10.6667vw;
      text-align: center;
      span {
        line-height: 10.6667vw;
        font-size: 4vw;
        color: #fff;
      }
    }
  }
}
</style>
