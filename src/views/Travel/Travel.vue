<template>
  <div class="travel">
    <van-nav-bar title="疫情查询" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-field
      readonly
      clickable
      label="城市"
      :value="value"
      placeholder="选择城市"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'Travel',
  data() {
    return {
      value: '',
      showPicker: false,
      columns: [
        { values: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'] },
        { values: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'] },
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
  },
};
</script>

<style></style>
