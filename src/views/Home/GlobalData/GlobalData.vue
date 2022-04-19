<template>
  <div class="global">
    <!-- 总数据 -->
    <div class="top">
      <div class="left">截止至北京时间{{ time }}</div>
      <div class="right">
        <!-- 应该会用vant做 -->
        <img src="@/assets/images/wenhao.png" alt="" />
        <span>数据说明</span>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li>
          <span>
            较昨日
            <i>???</i>
          </span>
          <div>{{ format(newtop.currentConfirmedCount) }}</div>
          <strong>现存确诊</strong>
        </li>
        <li>
          <span>
            较昨日
            <i>???</i>
          </span>
          <div>{{ format(newtop.confirmedCount) }}</div>
          <strong>累计确诊</strong>
        </li>
        <li>
          <span>
            较昨日
            <i>???</i>
          </span>
          <div>{{ format(newtop.deadCount) }}</div>
          <strong>累计死亡</strong>
        </li>
        <li>
          <span>
            较昨日
            <i>???</i>
          </span>
          <div>{{ format(newtop.curedCount) }}</div>
          <strong>累计治愈</strong>
        </li>
      </ul>
    </div>
    <!-- 重点国家 -->
    <TopBar title="重点国家疫情数据" datatime="false" />
    <div class="focuscity">
      <!-- 表头 -->
      <div class="title">
        <span>
          <p>地区</p>
        </span>
        <span>现存确诊</span>
        <span>累计确诊</span>
        <span>累计死亡</span>
        <span>累计治愈</span>
        <span>排序</span>
      </div>
      <div class="tb" v-for="(countrys, index) in subList" :key="index">
        <span>{{ countrys.country }}</span>
        <span>{{ format(countrys.curConfirm) }}</span>
        <span>{{ format(countrys.confirm) }}</span>
        <span>{{ format(countrys.died) }}</span>
        <span>{{ format(countrys.heal) }}</span>
        <span>{{ index + 1 }}</span>
      </div>
    </div>
    <TopBar title="国外疫情趋势" datatime="false" />
    <!-- 数据来源声明 -->
    <div class="declaration">
      <p>1、3月19日之前使用 WHO 每日公布的数据（中欧标准时间 10:00）</p>
      <p>2、3月19日开始由于 WHO 数据存在缺失问题，使用丁香园平台数据（北京时间 10:00）</p>
      <p>3、4月24日起，西班牙卫生部调整新冠肺炎确诊数据口径，只发布由PCR检测确诊的数据</p>
    </div>
    <!-- 数据轮播图 -->
    <CarrouselChart :xAxis="theWorldTrend.updateDate" :yAxis="yAxis" :chartName="chartname" />
    <!-- 全球各国数据 -->
    <Table :tableHead="eachIsland" :dataName="dataName" />
  </div>
</template>

<script>
import { time } from '@/mixins/index';
import { commafy } from '@/util/tools';
import { mapGetters } from 'vuex';
import CarrouselChart from './CarrouselChart/CarrouselChart.vue';
import Table from '@/components/Table/Table.vue';
export default {
  name: 'GlobalData',
  data() {
    return {
      // 表名
      // 没有进行类型限定的原因是异步数据第一次是空的，传进来报错
      chartname: ['累计确诊', '治愈', '死亡', '现有确诊', '新增确诊'],
      // 表头
      dataName: ['地区', '现存确诊', '累计确诊', '死亡', '治愈'],
    };
  },
  mixins: [time],
  mounted() {
    this.$store.dispatch('global/reqGlobalData');
  },
  computed: {
    ...mapGetters('global', ['totalData', 'theWorldTrend']),
    ...mapGetters('home', ['desc']),
    // 更换顶部数据
    newtop() {
      return this.desc.globalStatistics || {};
    },
    // 截取各大洲数据,因为最后一个是热门数据
    eachIsland() {
      return this.totalData.slice(0, 7);
    },
    // 顶部整体数据
    topNavData() {
      return this.totalData[7] || {};
    },
    // 重点国家
    subList() {
      // 排序
      console.log();
      return this.topNavData.subList || [];
    },
    // y轴数据
    yAxis() {
      return this.theWorldTrend.xResult || [];
    },
  },
  methods: {
    // 千分位格式化
    format(num) {
      return commafy(num);
    },
  },
  components: {
    CarrouselChart,
    Table,
  },
};
</script>

<style lang="less" scoped>
.global {
  margin: 0 4.2667vw 0;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10.4vw;
    font-size: 3.2vw;
    color: #666;
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 21.3333vw;
      height: 6.4vw;
      border-radius: 3.2vw 0 0 3.2vw;
      margin-right: -4vw;
      background-color: #f6f6f6;
      text-align: center;
      line-height: 6.4vw;
      img {
        width: 3.28vw;
        height: 3.28vw;
        margin-right: 1.2667vw;
      }
    }
  }
  .nav {
    height: 20vw;
    border: 1px solid #ebebeb;
    box-shadow: 0 0.2667vw 0.5333vw 0 #ebebeb;
    margin-bottom: 1.2667vw;
    ul {
      display: flex;
      li {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2.6667vw;
        span {
          font-size: 3.2vw;
          color: #666;
        }
        div {
          font-size: 3.5vw;
          color: red;
          font-weight: 700;
        }
        strong {
          color: #333;
          font-weight: 700;
          font-size: 2.3333vw;
        }
        // 变化的值的颜色和div一致
        i {
          // 稍微离字近点
          margin-left: -0.7333vw;
          color: red;
        }
      }
      // 前后添加竖线
      li:nth-child(2) {
        position: relative;
        i {
          color: rgb(247, 130, 7);
        }
        div {
          color: rgb(247, 130, 7);
        }
        &::before {
          content: '';
          display: block;
          position: absolute;
          top: 3.7333vw;
          left: 0;
          width: 0.2667vw;
          height: 10.6667vw;
          background-color: rgb(228, 228, 228);
          // 颜色渐变，实现中间颜色深，两边颜色浅
          background-image: linear-gradient(180deg, #eee, #e1e1e1 51%, #fff);
        }
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 3.7333vw;
          right: 0;
          width: 0.2667vw;
          height: 10.6667vw;
          background-color: rgb(228, 228, 228);
          // 颜色渐变，实现中间颜色深，两边颜色浅
          background-image: linear-gradient(180deg, #eee, #e1e1e1 51%, #fff);
        }
      }
      li:nth-child(3) {
        i {
          color: rgb(162, 90, 78);
        }
        div {
          color: rgb(162, 90, 78);
        }
      }
      li:nth-child(4) {
        position: relative;
        i {
          color: rgb(174, 33, 44);
        }
        div {
          color: rgb(174, 33, 44);
        }
        &::before {
          content: '';
          display: block;
          position: absolute;
          top: 3.7333vw;
          left: 0;
          width: 0.2667vw;
          height: 10.6667vw;
          background-color: rgb(228, 228, 228);
          // 颜色渐变，实现中间颜色深，两边颜色浅
          background-image: linear-gradient(180deg, #eee, #e1e1e1 51%, #fff);
        }
      }
    }
  }
  .title {
    height: 13.0667vw;
    display: flex;
    justify-content: space-between;
    // // align-items: center;
    line-height: 13.0667vw;
    text-align: center;
    .left {
      i {
        display: inline-block;
        margin: -0.2667vw 2.1333vw 0 0;
        width: 1.0667vw;
        height: 4.2667vw;
        background-color: #4169e2;
      }
      span {
        font-size: 4.5333vw;
      }
    }
    .right {
      font-size: 3.2vw;
      color: #999;
    }
  }
  .focuscity {
    border-bottom: 1px solid rgb(246, 246, 246);
    .title {
      height: 9.5333vw;
      span {
        width: 100%;
        border-left: 1px solid #fff;
        text-align: center;
        line-height: 9.5333vw;
        font-weight: 700;
        font-size: 3.2vw;
        &:nth-child(1) {
          background-color: rgb(227, 231, 243);
          p {
            margin-right: 3.3333vw;
          }
        }
        &:nth-child(2) {
          background-color: rgb(230, 154, 141);
        }
        &:nth-child(3) {
          background-color: rgb(243, 186, 176);
        }
        &:nth-child(4) {
          background-color: rgb(180, 192, 213);
        }
        &:nth-child(5) {
          background-color: rgb(203, 209, 220);
        }
        &:nth-child(6) {
          background-color: rgb(243, 186, 176);
        }
      }
    }
    .tb {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      border-bottom: 1px solid rgb(247, 247, 247);
      font-size: 3.2vw;
      span {
        display: flex;
        justify-content: center;
        padding: 1.19vw 0;
        margin-right: 1.3333vw;
        width: 100%;
        text-align: center;
      }
    }
  }
  .declaration {
    padding: 2.6667vw 2.3333vw;
    margin-bottom: 4.2667vw;
    background-color: rgb(255, 245, 236);
    font-size: 3.2vw;
  }
}
</style>
