<template>
  <div id="container">
    <i class="el-icon-s-fold" v-show="show" @click="controlMenu"></i>
    <i class="el-icon-s-unfold" v-show="hide" @click="controlMenu"></i>
    <el-breadcrumb class="span" separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadArr" :key="index">
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import Bus from "./EventBus";
export default {
  //!通过监听来获取路由地址
  watch: {
    $route: {
      handler: "routerChange",
      immediate: true, //首屏执行一次
    },
  },
  //todo 点击这个事件控制兄弟事件  用Bus通信
  data() {
    return {
      show: true,
      hide: false,
      breadArr: [],
    };
  },
  methods: {
    controlMenu() {
      Bus.$emit("conMenu");
      this.show = !this.show;
      this.hide = !this.hide;
    },
    routerChange(route) {
      console.log(route);
      this.breadArr = [];
      route.matched.forEach((item, index) => {
        if (index > 0) {
          this.breadArr.push({
            name: item.meta.title,
            path: item.path,
          });
        }
      });
      console.log(this.breadArr);
    },
  },
};
</script>

<style lang="less" scoped>
#container {
  display: flex;
  height: 30px;
  line-height: 30px;
  align-items: center;
  background-color: #f1f1f1;
  /deep/ .el-icon-s-unfold,
  .el-icon-s-fold {
    font-size: 22px;
    margin-left: 10px;
    cursor: pointer;
  }
  /deep/ .span {
    font-size: 14px;
    margin-left: 10px;
  }
}
</style>