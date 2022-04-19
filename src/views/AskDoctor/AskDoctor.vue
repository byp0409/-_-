<template>
  <div class="askDoctor">
    <!-- 回退 -->
    <van-nav-bar
      title="问医生"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
      placeholder
    />
    <!-- 主体部分 -->
    <div class="content">
      <!-- 类别 -->
      <div class="category" v-for="(data1, index) in category" :key="index">
        <div class="title">{{ data1.title }}</div>
        <div class="img">
          <div class="type" v-for="(data2, index) in data1.type" :key="index">
            <img :src="data2.img" alt="" />
            <span>{{ data2.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AskDoctor',
  // 把数据整理到data中，然后用v-for统一渲染
  data() {
    return {
      category: [
        {
          title: '常见科室',
          type: [
            { name: '皮肤科', img: require('./images/common0.png') },
            { name: '儿科', img: require('./images/common1.png') },
            { name: '妇科', img: require('./images/common2.png') },
            { name: '产科', img: require('./images/common3.png') },
            { name: '消化内科', img: require('./images/common4.png') },
            { name: '泌尿外科', img: require('./images/common5.png') },
            { name: '骨科', img: require('./images/common6.png') },
            { name: '耳鼻咽喉科', img: require('./images/common7.png') },
            { name: '口腔科', img: require('./images/common8.png') },
          ],
        },
        {
          title: '内科',
          type: [
            { name: '普通内科', img: require('./images/Internal0.png') },
            { name: '呼吸内科', img: require('./images/Internal1.png') },
            { name: '感染科 传染科', img: require('./images/Internal2.png') },
            { name: '内分泌科', img: require('./images/Internal3.png') },
            { name: '心血管内科', img: require('./images/Internal4.png') },
            { name: '神经内科', img: require('./images/Internal5.png') },
            { name: '肾脏内科', img: require('./images/Internal6.png') },
            { name: '风湿免疫科', img: require('./images/Internal7.png') },
            { name: '血液科', img: require('./images/Internal8.png') },
          ],
        },
        {
          title: '外科',
          type: [
            { name: '普外科', img: require('./images/surgical0.png') },
            { name: '神经内科', img: require('./images/surgical1.png') },
            { name: '心胸外科', img: require('./images/surgical2.png') },
            { name: '肝胆胰腺外科', img: require('./images/surgical3.png') },
            { name: '甲状腺乳腺外科', img: require('./images/surgical4.png') },
            { name: '美容整型科', img: require('./images/surgical5.png') },
          ],
        },
        {
          title: '其他',
          type: [
            { name: '眼科', img: require('./images/other0.png') },
            { name: '性病科', img: require('./images/other1.png') },
            { name: '全科', img: require('./images/other2.png') },
            { name: '精神心理科', img: require('./images/other3.png') },
            { name: '肿瘤科', img: require('./images/other4.png') },
            { name: '影像检验科', img: require('./images/other5.png') },
            { name: '疼痛科 麻醉科', img: require('./images/other6.png') },
            { name: '针剂科', img: require('./images/other7.png') },
            { name: '疫苗科', img: require('./images/other8.png') },
          ],
        },
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  padding: 0 4.2667vw 0;
  background-color: #fff;
  .category {
    padding-top: 5.3333vw;
    .title {
      font-size: 5.3333vw;
    }
    .img {
      display: flex;
      flex-wrap: wrap;
      margin-top: 5.3333vw;
      .type {
        flex: 29%;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: rgb(250, 250, 250);
        margin: 0 3.2vw 3.2vw 0;
        padding: 5.28vw 0;
        border-radius: 1.5333vw;
        &:nth-child(3n) {
          margin: 0 0 3.2vw;
        }
        span {
          font-size: 3.7333vw;
          padding-top: 1.2vw;
        }
        img {
          width: 10.6667vw;
        }
      }
    }
  }
}
</style>
