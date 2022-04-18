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
    <div class="nav">
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
    <!-- 标题 -->
    <div class="datatable">
      <TopBar title="国内疫情趋势" />
    </div>
    <Carrousel />
    <!-- 数据表格 -->
    <div class="table">
      <!-- 表头 -->
      <div class="title">
        <span>地区</span>
        <span>现存确诊</span>
        <span>累计确诊</span>
        <span>死亡</span>
        <span>治愈</span>
      </div>
      <!-- 表体 -->
      <div v-for="(item, index) in sortretdatanow" :key="index">
        <!-- 总体信息 -->
        <div class="th" @click="showtb(index)">
          <span>
            <img src="@/assets/images/down.png" alt="" />
            {{ item.xArea }}
          </span>
          <span>{{ format(item.curConfirm) }}</span>
          <span>{{ format(item.confirm) }}</span>
          <span>{{ format(item.died) }}</span>
          <span>{{ format(item.heal) }}</span>
        </div>
        <!-- 详细信息 -->
        <div class="tb" v-show="index == i">
          <div class="tr" v-for="(province, index) in item.subList" :key="index">
            <span>{{ province.city }}</span>
            <span>{{ format(province.curConfirm) }}</span>
            <span>{{ format(province.confirm) }}</span>
            <span>{{ format(province.died) }}</span>
            <span>{{ format(province.heal) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { time } from '@/mixins/index';
import { commafy, sign } from '@/util/tools';
import Carrousel from '@/components/Carrousel/Carrousel.vue';
export default {
  name: 'CHdata',
  data() {
    return {
      i: -1,
      flag: 1,
    };
  },
  mounted() {
    this.$store.dispatch('china/reqHistory');
  },
  mixins: [time],
  methods: {
    // 显示表体
    showtb(i) {
      if (this.flag == 1) {
        this.i = i;
        this.flag = 0;
      } else if (this.flag == 0) {
        this.i = -1;
        this.flag = 1;
      }
    },
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
    ...mapGetters('home', ['desc', 'sortretdatanow']),
  },
  components: {
    Carrousel,
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
  .nav {
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
          font-size: 3.2vw;
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
  .table {
    background-color: #fff;
    padding-bottom: 3vw;
    font-size: 3.2vw;
    .title {
      display: flex;
      span {
        flex: 1;
        text-align: center;
        height: 8.5333vw;
        // padding: 2.3vw 0;
        line-height: 8.5333vw;
        background-color: rgb(227, 231, 243);
        border-right: 0.2667vw solid #fff;
        font-size: 3.4667vw;
        font-weight: 700;
        &:nth-child(2) {
          background-color: rgb(243, 186, 176);
        }
        &:nth-child(3) {
          background-color: rgb(230, 154, 141);
        }
        &:nth-child(4) {
          background-color: rgb(180, 192, 213);
        }
        &:nth-child(5) {
          background-color: rgb(149, 219, 154);
        }
      }
    }
    .th {
      display: flex;
      height: 8.5333vw;
      line-height: 8.5333vw;
      background-color: rgb(247, 247, 247);
      span {
        flex: 1;
        position: relative;
        text-align: center;
        border-right: 0.2667vw solid #fff;
        img {
          position: absolute;
          top: 3.2vw;
          left: 1.6vw;
          width: 2.1333vw;
          height: 1.6vw;
        }
      }
    }
    .tr {
      display: flex;
      height: 6.4vw;
      span {
        flex: 1;
        text-align: center;
        line-height: 6.4vw;
        border-bottom: 0.2667vw solid rgb(235, 235, 235);
      }
    }
  }
}
</style>
