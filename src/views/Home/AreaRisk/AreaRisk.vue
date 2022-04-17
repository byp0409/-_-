<template>
  <div class="content">
    <!-- 近期疫情分布 -->
    <div class="title">
      <div class="left">
        <i></i>
        <span>近期疫情分布</span>
      </div>
      <div class="right">
        <!-- 静态数据，需要替换 -->
        <span>截止至北京时间{{ time }}</span>
      </div>
    </div>
    <!-- 风险地区和低风险地区数量 -->
    <div class="riskarea">
      <div class="left">
        <p>
          高风险地区
          <span class="high">{{ high.length }}</span>
          个
        </p>
        &nbsp;
        <p>
          中风险地区
          <span class="mid">{{ mid.length }}</span>
          个
        </p>
      </div>
      <!-- 之后需要替换 -->
      <a href="#">查看全部 ></a>
    </div>
    <!-- 国内疫情信息列表 -->
    <div class="datalist">
      <!-- 表头 -->
      <div class="title">
        <span>
          <p>地区</p>
        </span>
        <span>昨日本土新增</span>
        <span>现存确诊</span>
        <span>累计确诊</span>
      </div>
      <!-- 内容 没有风险地区的数据，换成累计确诊 -->
      <div class="content" v-for="(item, index) in sortretdata" :key="index">
        <!-- 表头 -->
        <div class="th" @click="showProvince(index)">
          <span>
            <img src="@/assets/images/down.png" alt="" />
            <p>{{ item.xArea }}</p>
          </span>
          <span>{{ format(item.nativeRelative) }}</span>
          <span>{{ format(item.curConfirm) }}</span>
          <span>{{ format(item.confirm) }}</span>
        </div>
        <!-- 省内具体信息，这个div是临时套的，因为他相当于正真的表体，而下面的tb是每一行，这里布局出现问题 -->
        <div v-show="index == i">
          <div class="tb" v-for="(province, index) in item.subList" :key="index">
            <span>{{ province.city }}</span>
            <span>{{ format(province.nativeRelative) }}</span>
            <span>{{ format(province.curConfirm) }}</span>
            <span>{{ format(province.confirm) }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 国内疫情地图 -->
    <div class="title">
      <div class="left">
        <i></i>
        <span>国内疫情地图</span>
      </div>
      <div class="right">
        <!-- 静态数据，需要替换 -->
        <span>截止至北京时间{{ time }}</span>
      </div>
    </div>
    <!-- 切换地图 -->
    <div class="bgc">
      <van-tabs v-model="active" animated @change="change">
        <van-tab title="现存确诊">
          <!-- 地图组件 -->
          <!-- 加上text-algin: center属性可以保证居中，但是每次切换视口大小时需要刷新 -->
          <div id="map1" style="width: 100vw; height: 86.6667vw; text-algin: center"></div>
        </van-tab>
        <van-tab title="累计确诊">
          <!-- 地图组件 -->
          <!-- 加上text-algin: center属性可以保证居中，但是每次切换视口大小时需要刷新 -->
          <div id="map2" style="width: 100vw; height: 86.6667vw; text-algin: center"></div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { time } from '@/mixins/index';
import { mapGetters } from 'vuex';
import { commafy } from '@/util/tools';

export default {
  name: 'AreaRisk',
  data() {
    return {
      active: '0',
      i: -1,
      flag: 0,
    };
  },
  watch: {
    // 预执行一次，在mounted里预执行会出现空数据
    existing() {
      this.change();
    },
  },
  // 切换路由后地图被销毁，并且watch监视不带数据，因此需要在数据更新前调用change
  beforeUpdate() {
    this.change();
  },
  methods: {
    // 控制省内信息显示与隐藏
    // 两个参数用来选出点击的那个节点
    showProvince(index) {
      if (this.flag == 0) {
        // 获取到点击的那个索引
        this.i = index;
        this.flag = 1;
      } else if (this.flag == 1) {
        this.i = -1;
        this.flag = 0;
      }
    },
    // 千分位格式化
    format(num) {
      return commafy(num);
    },
    // change是组件的事件
    change() {
      this.$nextTick(() => {
        if (this.active == 0) {
          this.$Chart.map('map1', this.existing, '现存确诊');
        } else if (this.active == 1) {
          this.$Chart.map('map2', this.total, '累计确诊');
        }
      });
    },
  },
  computed: {
    ...mapGetters('home', ['riskarea', 'sortretdata']),
    // 选出数据，解决报错
    mid() {
      return this.riskarea.mid || [];
    },
    high() {
      return this.riskarea.high || [];
    },
    // 现存确诊
    existing() {
      const existingArr = [];
      this.sortretdata.forEach(item => {
        let tempobj = {};
        tempobj.name = item.xArea;
        tempobj.value = item.curConfirm;
        existingArr.push(tempobj);
      });
      return existingArr;
    },
    // 累计确诊
    total() {
      const existingArr = [];
      this.sortretdata.forEach(item => {
        let tempobj = {};
        tempobj.name = item.xArea;
        tempobj.value = item.confirm;
        existingArr.push(tempobj);
      });
      return existingArr;
    },
  },
  mixins: [time],
};
</script>

<style lang="less" scoped>
.content {
  background-color: #fff;
  // 测试高度
  // height: 100px;
  .riskarea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10.6667vw;
    margin: 1.3333vw 4.2667vw 4.2667vw;
    border: 1px solid #d9d9d9;
    border-radius: 0.5333vw;
    .left {
      display: flex;
      margin-left: 4vw;
      line-height: 10.6667vw;
      font-size: 4vw;
      .high {
        color: rgb(247, 76, 49);
        font-weight: 700;
      }
      .mid {
        color: rgb(251, 176, 70);
        font-weight: 700;
      }
    }
    a {
      color: rgb(65, 155, 237);
      padding-right: 2.6667vw;
    }
  }
  .datalist {
    border-bottom: 1px solid rgb(246, 246, 246);
    padding-bottom: 4.8vw;
    .title {
      height: 9.5333vw;
      span {
        width: 100%;
        border-left: 1px solid #fff;
        text-align: center;
        line-height: 8.5333vw;
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
      }
    }
    .content {
      background-color: rgb(247, 247, 247);
      width: 91.4667vw;
      // height: 9.5333vw;
      margin: 0 4.2667vw;
      .th {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 3.2vw;
        span {
          position: relative;
          padding: 2.04vw 0;
          width: 100%;
          border-right: 0.2667vw solid #fff;
          text-align: center;
          img {
            position: absolute;
            top: 3.2vw;
            left: 2vw;
            width: 2.1333vw;
            height: 1.6vw;
          }
          p {
            margin-right: 3.5333vw;
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
  .title {
    top: 0;
    padding: 1.3333vw 4.2667vw 0;
    height: 13.0667vw;
    display: flex;
    justify-content: space-between;
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
  .bgc {
    background-color: rgb(247, 247, 247);
  }
}
</style>
