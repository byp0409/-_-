<template>
  <div class="content">
    <div class="top">
      <div class="left">截止至北京时间{{ time }}</div>
      <div class="right">
        <!-- 应该会用vant做 -->
        <img src="./images/wenhao.png" alt="" />
        <span>数据说明</span>
      </div>
    </div>
    <!-- 疫情数据，这部分数据在desc里，数据命名有点复杂 -->
    <!-- 替换数据时对着api接口的文档写 -->
    <div class="table">
      <ul>
        <li>
          <span>
            较昨日
            <i>{{ addsign(desc.currentConfirmedIncr) }}</i>
          </span>
          <div>
            {{ format(desc.currentConfirmedCount) }}
          </div>
          <strong>现存确诊</strong>
        </li>
        <li>
          <span>
            较昨日
            <i>{{ addsign(desc.yesterdaySuspectedCountIncr) }}</i>
          </span>
          <div>{{ format(desc.suspectedCount) }}</div>
          <strong>境外输入</strong>
        </li>
        <li>
          <span>
            较昨日
            <i>{{ addsign(desc.seriousIncr) }}</i>
          </span>
          <div>{{ format(desc.seriousCount) }}</div>
          <strong>现存无症状</strong>
        </li>
        <li>
          <span>
            较昨日
            <i>{{ addsign(desc.yesterdayConfirmedCountIncr) }}</i>
          </span>
          <div>{{ format(desc.confirmedCount) }}</div>
          <strong>累计确诊</strong>
        </li>
        <li>
          <span>
            较昨日
            <i>{{ addsign(desc.deadIncr) }}</i>
          </span>
          <div>{{ format(desc.deadCount) }}</div>
          <strong>累计死亡</strong>
        </li>
        <li>
          <span>
            较昨日
            <i>{{ addsign(desc.curedIncr) }}</i>
          </span>
          <div>{{ format(desc.deadCount) }}</div>
          <strong>累计治愈</strong>
        </li>
      </ul>
    </div>
    <!-- 广告栏 -->
    <div class="banner">
      <!-- 之后点击要进行路由调整 -->
      <a href="#">
        <img src="./images/banner.png" alt="" />
      </a>
    </div>
    <div class="line"></div>
    <!-- 数据表格 -->
    <div class="datatable">
      <div class="title">
        <div class="left">
          <i></i>
          <span>国内疫情趋势</span>
        </div>
        <div class="right">
          <!-- 静态数据，需要替换 -->
          <span>截至北京时间{{ time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { time } from '@/mixins/index';
import { commafy, sign } from '@/util/tools';
export default {
  name: 'CHdata',
  mixins: [time],
  methods: {
    // 千分位格式化
    format(num) {
      return commafy(num);
    },
    // 加减号格式化
    addsign(num) {
      return sign(num);
    },
  },
  computed: {
    ...mapGetters('home', ['desc']),
  },
};
</script>

<style lang="less" scoped>
.content {
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
  .table {
    height: 38.1333vw;
    border: 1px solid #ebebeb;
    box-shadow: 0 0.2667vw 0.5333vw 0 #ebebeb;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        flex: 33.3%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2.6667vw;
        span {
          font-size: 12px;
          color: #666;
        }
        div {
          font-size: 5.3333vw;
          color: red;
          font-weight: 700;
        }
        strong {
          color: #333;
          font-weight: 700;
          font-size: 3.2vw;
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
  .banner {
    height: 16vw;
    margin: 4.2667vw 0 4.2667vw;
    img {
      width: 100%;
    }
  }
  .line {
    height: 0.2667vw;
    background-color: #ebebeb;
    margin: 0 -4.333vw;
  }
  .datatable {
    .title {
      // padding: 1.3333vw 4.2667vw 0;
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
  }
}
</style>
