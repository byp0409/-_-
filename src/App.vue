<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
export default {
  name: 'APP',
  components: {
    Footer,
  },
};
</script>

<style>
/* 在这引入解决刷新页面样式丢失的问题 */
@import url('@/assets/normalize.css');
</style>
