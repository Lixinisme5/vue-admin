<template>
  <div>
    <i class="el-icon-s-unfold" @click="controlMenu"></i>
  </div>
</template>

<script>
import Bus from "./EventBus";
export default {
  //todo 点击这个事件控制兄弟事件  用Bus通信
  methods: {
    controlMenu() {
      Bus.$emit("conMenu");
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-icon-s-unfold {
  line-height: 30px;
  font-size: 22px;
  margin-left: 10px;
  cursor: pointer;
}
</style>