<template>
  <!-- 数据表格 -->
  <div class="table">
    <!-- 表头 -->
    <div class="title">
      <span v-for="(name, index) in dataName" :key="index">{{ name }}</span>
    </div>
    <!-- 表体 遍历 -->
    <div class="content" v-for="(data, index) in tableHead" :key="index">
      <!-- 总体信息 -->
      <div class="th" @click="showtb(index)">
        <span>{{ data.xArea }}</span>
        <span>{{ data.curConfirm }}</span>
        <span>{{ data.confirm }}</span>
        <span>{{ data.died }}</span>
        <span>{{ data.heal }}</span>
      </div>
      <!-- 详细信息 -->
      <!-- -->
      <div class="tb" v-show="index == i">
        <!-- 遍历表体数据 -->
        <div class="tr" v-for="(subList, index) in data.subList" :key="index">
          <span>{{ subList.country }}</span>
          <span>{{ subList.curConfirm }}</span>
          <span>{{ subList.confirm }}</span>
          <span>{{ subList.died }}</span>
          <span>{{ subList.heal }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      i: -1,
      flag: 1,
    };
  },
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
  },
  props: ['tableHead', 'dataName'],
};
</script>

<style lang="less" scoped>
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
    // align-items: center;
    // height: 6.4vw;
    span {
      flex: 1;
      text-align: center;
      line-height: 6.4vw;
      border-bottom: 0.2667vw solid rgb(235, 235, 235);
    }
  }
}
</style>
