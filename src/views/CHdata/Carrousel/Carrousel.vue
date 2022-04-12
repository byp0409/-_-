<template>
  <div class="carrousel">
    <!-- 轮播图 -->
    <swiper ref="mySwiper" :options="swiperOptions" class="container">
      <swiper-slide>
        <div id="chart1" style="width: 342px; height: 182px"></div>
      </swiper-slide>
      <swiper-slide>
        <div id="chart2" style="width: 342px; height: 182px"></div>
      </swiper-slide>
      <swiper-slide>
        <div id="chart3" style="width: 342px; height: 182px"></div>
      </swiper-slide>
      <swiper-slide>
        <div id="chart4" style="width: 342px; height: 182px"></div>
      </swiper-slide>
      <swiper-slide>
        <div id="chart5" style="width: 342px; height: 182px"></div>
      </swiper-slide>
    </swiper>
    <!-- 分页器 -->
    <div class="page">
      <div
        :class="{ active: index == active }"
        v-for="(name, index) in pageName"
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
import { mapGetters } from 'vuex';
export default {
  name: 'Carrousel',
  data() {
    // 让普通函数也能用到vue实例
    let that = this;
    return {
      // 分页器名字
      pageName: ['本土确诊', '境外输入', '现存确诊', '累计治愈', '累计死亡'],
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
  methods: {
    // 控制底部分页器
    changeChart(index) {
      this.active = index;
      // 跳转到制定页面，实现分页器和轮播图联动
      this.swiper.slideTo(index, 500, false);
    },
  },
  computed: {
    // 简化获取swiper实例
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    // 获取每日历史数据，
    ...mapGetters('china', ['chinaDayAddList', 'chinaDayList']),
    // 整理统计图数据
    nearDay() {
      // 接收到的数据已经排好序了，直接把日期和数据在这就能整理
      let result = [];
      let date = [];
      let localConfirmadd = [];
      let importedCase = [];
      this.chinaDayAddList.forEach(item => {
        date.push(item.date);
        localConfirmadd.push(item.localConfirmadd);
        importedCase.push(item.importedCase);
      });
      result.push(date, localConfirmadd, importedCase);
      return result || [];
    },
    historyDay() {
      let result = [];
      let date = [];
      let nowConfirm = [];
      let heal = [];
      let dead = [];
      this.chinaDayList.forEach(item => {
        date.push(item.date);
        nowConfirm.push(item.nowConfirm);
        heal.push(item.heal);
        dead.push(item.dead);
      });
      result.push(date, nowConfirm, heal, dead);
      return result;
    },
  },
  // 老套路，页面一开始展示的需要用watch监视一下，保证数据接收成功
  watch: {
    nearDay(value) {
      // id data name
      this.$Chart.chart1('chart1', value[0], value[1], '全国新增确诊');
      this.$Chart.chart1('chart2', value[0], value[2], '全国新增境外输入');
    },
    historyDay(value) {
      // console.log(this.historyDay);
      this.$Chart.chart1('chart3', value[0], value[1], '现存确诊');
      this.$Chart.chart1('chart4', value[0], value[2], '累计治愈');
      this.$Chart.chart1('chart5', value[0], value[3], '累计死亡');
    },
  },
};
</script>

<style lang="less" scoped>
.carrousel {
  .container {
    border: 0.2667vw solid rgb(246, 246, 246);
    box-shadow: 0.2667vw 0.5333vw 1.0667vw rgb(0 0 0 / 5%);
    // .chart1 {
    //   // background-color: #333;
    // }
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
