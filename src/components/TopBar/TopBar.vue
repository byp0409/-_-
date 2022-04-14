<template>
  <div class="top">
    <div class="title">
      <div class="left">
        <i></i>
        <span>{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { time } from '@/mixins/index';
export default {
  name: 'TopNav',
  props: ['title'],
  mixins: [time],
};
</script>

<style lang="less" scoped>
.title {
  // padding: 1.3333vw 4.2667vw 0;
  height: 13.0667vw;
  display: flex;
  justify-content: space-between;
  // align-items: center;
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
}
</style>
