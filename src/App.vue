<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'APP',
};
</script>

<style>
/* 在这引入解决刷新页面样式丢失的问题 */
@import url('@/assets/normalize.css');
</style>
