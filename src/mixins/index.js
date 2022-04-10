// 统一计算时间戳
import { Timestamp } from '@/util/tools';
import { mapGetters } from 'vuex';
export const time = {
  computed: {
    // 把数据获取时间的时间戳转换为正常时间
    time() {
      let times = this.desc.modifyTime;
      return Timestamp(times);
    },
    ...mapGetters('home', ['desc']),
  },
};
