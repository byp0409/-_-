<template>
  <div class="carrousel">
    <!-- 轮播图 -->
    <swiper ref="mySwiper" :options="swiperOptions" class="container">
      <!-- 要求数据为一个数组，数组 -->
      <swiper-slide v-for="i in chartName.length" :key="i">
        <div :id="getId(i)" style="width: 342px; height: 182px"></div>
      </swiper-slide>
    </swiper>
    <!-- 分页器 -->
    <div class="page">
      <div
        :class="{ active: index == active }"
        v-for="(name, index) in chartName"
        :key="index"
        @click="changeChart(index)"
      >
        {{ name }}
      </div>
    </div>
    <!-- 底部分隔 -->
    <div class="bgc"></div>
  </div>
</template>

<script>
export default {
  name: 'CarrouselChart',
  data() {
    // 让普通函数也能用到vue实例
    let that = this;
    return {
      // 控制点击颜色
      active: 0,
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
  props: ['xAxis', 'yAxis', 'chartName', 'gridX'],
  methods: {
    // 控制底部分页器
    changeChart(index) {
      this.active = index;
      // 跳转到制定页面，实现分页器和轮播图联动
      this.swiper.slideTo(index, 500, false);
    },
    getId(index) {
      return 'chart' + index;
    },
  },
  computed: {
    // 简化获取swiper实例
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  watch: {
    yAxis(value) {
      let i = 0;
      this.chartName.forEach(item => {
        // 分别传入id、x轴、y轴、表名
        this.$Chart.chart(`chart${i + 1}`, this.xAxis, this.yAxis[i].data, item);
        i++;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.carrousel {
  .container {
    border: 0.2667vw solid rgb(246, 246, 246);
    box-shadow: 0.2667vw 0.5333vw 1.0667vw rgb(0 0 0 / 5%);
  }
  .page {
    display: flex;
    justify-content: center;
    height: 11.2vw;
    margin-top: 4.5333vw;
    font-size: 3.4667vw;
    div {
      flex: 1;
      display: flex;
      justify-content: center;
      height: 11.2vw;
      line-height: 11.2vw;
      border-right: 0.5333vw solid #fff;
      border-radius: 1.3333vw;
      background-color: rgb(247, 247, 247);
    }
    .active {
      color: rgb(136, 152, 229);
      background-color: rgb(241, 245, 255);
    }
  }
  .bgc {
    height: 5.3333vw;
    background-color: #fff;
  }
}
</style>
