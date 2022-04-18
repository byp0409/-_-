<template>
  <div class="travel">
    <van-nav-bar title="出行防护贴士" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="content">
      <div class="title">
        <img src="./images/icon.png" alt="" />
        <span>出行防护贴士</span>
      </div>
      <!-- 导航 -->
      <div class="nav">
        <span
          :class="{ active: index == i }"
          v-for="(navname, index) in nav"
          :key="index"
          @click="change(index)"
        >
          {{ navname }}
        </span>
      </div>
      <div class="show">
        <div class="content1" v-if="i == 0">
          <div class="title">1. 准备好出行物品</div>
          <p>
            包里准备好消毒湿巾、酒精喷雾、酒精棉片、免洗洗手液、一次性手套。出门前戴好口罩，并在包里准备
            2～3 个备用口罩。保证及时更换的同时，不要用手触摸口罩外部，以免病菌转移到手部。
          </p>
          <div class="title">2. 选择靠近车厢两端的位置</div>
          <p>车厢两端和回风口气流比较大，可以优先选择，回风口通常位于车厢有厕所的一端。</p>
          <div class="title">3. 注意车上多人触摸的地方，别乱摸，勤洗手</div>
          <p>如触摸了，不要揉眼睛、摸鼻子等，请及时洗手。</p>
          <div class="title">4. 从车厢编号对应站台位置上车</div>
          <p>
            从车厢编号对应站台位置上车，能避免上车后在车厢内长距离行走、与他人近距离接触。在月台上排队时，还应注意与他人保持间隔。
          </p>
          <div class="title">5. 别在月台抽烟</div>
          <p>
            抽烟需摘口罩，会增加感染风险。另外，即使没有疫情，也勿在月台抽烟。部分火车可以开窗通风，但请先和车上工作人员沟通。
          </p>
          <div class="title">6. 卧铺尽量选上铺</div>
          <p>
            气流整体从上往下吹，因此，上铺相对来说更不易被传染。但需要注意，在上铺若要打喷嚏、咳嗽，务必遮掩口鼻，防止飞沫向下传播。睡觉时也勿摘口罩。
          </p>
        </div>
        <div class="content2" v-else-if="i == 1">
          <div class="title">1. 准备好出行物品</div>
          <p>
            为了保障航空安全，多种消毒液（包括含酒精的免洗洗手液）是不能随身携带上飞机。因此，可以用消毒湿巾等替代。出门前戴好口罩，并在包里准备
            2～3 个备用口罩，及时更换。
          </p>
          <div class="title">2. 间隔而坐</div>
          <p>
            飞机内如果有人打喷嚏，飞沫也会在同一排内打转后排出，但不容易向前后多排的乘客扩散。
            因此，如果有条件的话，挑选人少的航班，并且间隔而坐。
          </p>
          <div class="title">3. 靠窗而坐，并且少走动</div>
          <p>推荐大家选靠窗位置并且少走动，可以降低感染几率。</p>
          <div class="title">4. 不吃或错峰吃飞机餐</div>
          <p>
            空中餐食和机供品进行了调整，只提供一次性包装的餐食和机供品。
            飞机上的餐食一般是同一时段内统一发放。这可能会导致：机舱内大部分人同时摘下口罩。
            丁香医生建议在飞机上不吃飞机餐，以避免摘除口罩。若航程较长，可以等临近座位的乘客用餐完后错峰用餐。
          </p>
        </div>
        <div class="content3" v-else-if="i == 2">
          <div class="title">1. 准备好出行物品</div>
          <p>
            包里准备好消毒湿巾、酒精喷雾、酒精棉片、免洗洗手液、一次性手套。出门前戴好口罩，并在包里准备
            2～3 个备用口罩。保证及时更换的同时，不要用手触摸口罩外部，以免病菌转移到手部。
          </p>
          <div class="title">2. 对周围物品进行消毒</div>
          <p>
            用消毒纸巾对可能触碰到的位置进行擦拭消毒。避免用手接触口、鼻、眼，咳嗽或者打喷嚏时用纸巾或者手臂遮挡抠鼻。尽量避免和周围人过多交谈。乘车过程中，尽量不要摘口罩，如果需要过夜的汽车，睡觉时也不建议摘掉口罩。
          </p>
          <div class="title">3. 不吃或错峰吃饭</div>
          <p>
            如果是短途汽车，尽量不用餐。如果是长途汽车，可以等临近座位的乘客用餐完后错峰用餐。用餐前做好手消毒。
          </p>
          <div class="title">4. 外面温度适合的话，尽量开窗通风</div>
          <p>
            对于南方一些地区，比较温暖，可以选择开窗通风。对于北方的地区，可以在休息区的适合，开窗通风，增加车内空气流动。
          </p>
          <div class="title">5. 如果有条件，尽量间隔而坐</div>
          <p>
            高、中、低风险地区客座率分别不超过
            50％、70％、90％。如果有条件，可以选择和周围人隔一个座位。
          </p>
        </div>
        <div class="content4" v-else-if="i == 3">
          <div class="title">1. 准备好出行物品</div>
          <p>
            包里准备好消毒湿巾、酒精喷雾、酒精棉片、免洗洗手液、一次性手套。出门前戴好口罩，并在包里准备
            2～3 个备用口罩。保证及时更换的同时，不要用手触摸口罩外部，以免病菌转移到手部。
          </p>
          <div class="title">2. 注意通风</div>
          <p>
            如果天气允许且不堵车，建议自驾过程中保持打开车窗通风。
            如果天气较冷无法开窗，可以打开车内空调的「通风」或「空气循环」功能。
          </p>
          <div class="title">3. 尽量不到服务站</div>
          <p>
            服务站是高速路上的人流聚集点，选择自驾时，如无必要，尽量不到服务站。
            出行之前，可以先上洗手间、准备好需要的食物和水等。
          </p>
          <div class="title">4. 车上有其他人时，少聊天、戴好口罩</div>
          <p>
            如果车上有其他人时，尤其是打车、拼车等情况，车上同行者为陌生人时，最好少聊天，并且记得佩戴口罩。
          </p>
          <div class="title">5. 在人群密集的地方，尽量少开窗</div>
          <p>在人群密集的地方，尽量少开窗，尽量避免随意下车走动。</p>
          <div class="title">6. 做好行程规划，错峰返乡</div>
          <p>返乡之前，根据各地道路封闭情况，做好行程规划安排，错峰返乡返岗。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Travel',
  data() {
    return {
      i: 0,
      nav: ['火车', '飞机', '客运汽车', '自驾'],
    };
  },
  methods: {
    // 回退
    onClickLeft() {
      this.$router.back();
    },
    // 切换
    change(index) {
      this.i = index;
    },
  },
};
</script>

<style lang="less" scoped>
.travel {
  .content {
    margin: 2.5333vw 4.2667vw;
    padding: 4vw 3.2vw;
    background-color: #fff;
    border-radius: 2.5333vw;
    .title {
      position: relative;
      span {
        font-size: 4.2667vw;
        font-weight: 700;
        margin-left: 6.5333vw;
      }
      img {
        width: 5.3333vw;
        position: absolute;
        top: 0vw;
        left: 0px;
      }
    }
    .nav {
      display: flex;
      padding-top: 3.3333vw;
      span {
        display: flex;
        justify-content: center;
        background-color: rgb(247, 247, 247);
        padding: 2.6vw 0;
        margin: 0 0.5333vw;
        border-radius: 1.3333vw;
        font-size: 3.4667vw;
        flex: 1;
      }
      .active {
        background-color: rgb(65, 105, 226);
        color: #fff;
      }
    }
    .show {
      margin-top: 4vw;
      padding: 3.2vw;
      background-color: rgb(247, 247, 247);
      .title {
        font-size: 4vw;
        font-weight: 700;
        margin-bottom: 2.6667vw;
      }
      p {
        font-size: 4vw;
        margin-bottom: 2.6667vw;
      }
    }
  }
}
</style>
