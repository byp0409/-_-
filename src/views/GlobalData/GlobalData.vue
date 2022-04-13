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
          <div>{{ format(topNavData.curConfirm) }}</div>
          <strong>现存确诊</strong>
        </li>
        <li>
          <span>
            较昨日
            <i>???</i>
          </span>
          <div>{{ format(topNavData.confirm) }}</div>
          <strong>累计确诊</strong>
        </li>
        <li>
          <span>
            较昨日
            <i>???</i>
          </span>
          <div>{{ format(topNavData.died) }}</div>
          <strong>累计死亡</strong>
        </li>
        <li>
          <span>
            较昨日
            <i>???</i>
          </span>
          <div>{{ format(topNavData.heal) }}</div>
          <strong>累计治愈</strong>
        </li>
      </ul>
    </div>
    <!-- 重点国家 -->
    <div class="title">
      <div class="left">
        <i></i>
        <span>重点国家疫情数据</span>
      </div>
    </div>
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
    <div class="title">
      <div class="left">
        <i></i>
        <span>国外疫情趋势</span>
      </div>
    </div>
  </div>
</template>

<script>
import { time } from '@/mixins/index';
import { commafy } from '@/util/tools';
import { mapGetters } from 'vuex';
export default {
  name: 'GlobalData',
  mixins: [time],
  mounted() {
    this.$store.dispatch('global/reqGlobalData');
  },
  computed: {
    ...mapGetters('global', ['totalData']),
    // 顶部整体数据
    topNavData() {
      return this.totalData[7] || {};
    },
    // 重点国家
    subList() {
      // 排序
      return this.totalData[7].subList.sort((a, b) => {
        return b.curConfirm - a.curConfirm;
      });
    },
  },
  methods: {
    // 千分位格式化
    format(num) {
      return commafy(num);
    },
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
    ul {
      display: flex;
      li {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2.6667vw;
        span {
          font-size: 12px;
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
        i {
          color: rgb(174, 33, 44);
        }
        div {
          color: rgb(174, 33, 44);
        }
      }
      // 前后添加竖线
      li:nth-child(5) {
        position: relative;
        i {
          color: rgb(93, 112, 146);
        }
        div {
          color: rgb(93, 112, 146);
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
      li:nth-child(6) {
        i {
          color: rgb(40, 183, 163);
        }
        div {
          color: rgb(40, 183, 163);
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
    padding-bottom: 4.8vw;
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
}
</style>
