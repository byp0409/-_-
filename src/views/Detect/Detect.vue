<template>
  <div class="detect">
    <van-nav-bar
      title="核酸检测"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
      placeholder
    />
    <van-tabs v-model="active">
      <van-tab title="核酸检测"><van-empty description="暂无数据" /></van-tab>
      <van-tab title="接种点"><van-empty description="暂无数据" /></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'Detect',
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>

<style lang="less" scoped></style>
