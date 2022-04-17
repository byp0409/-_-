<template>
  <div class="otherCity">
    <TopBar title="除中国外其他国家疫情" />
    <Table :dataName="dataName" :tableHead="caseOutsideList" />
  </div>
</template>

<script>
import Table from './Table/Table.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'OtherCity',
  data() {
    return {
      dataName: ['地区', '现存确诊', '累计确诊', '死亡', '治愈'],
    };
  },
  mounted() {
    this.$store.dispatch('global/reqGlobalData');
  },
  computed: {
    ...mapGetters('global', ['caseOutsideList']),
  },
  components: { Table },
};
</script>

<style lang="less" scoped>
.otherCity {
  margin: 0 4.2667vw 0;
}
</style>
