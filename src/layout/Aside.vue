<template>
  <div id="container">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <!-- 一级导航 -->
      <template v-for="item in menu">
        <router-link :to="'/layout/' + item.path" :key="item.path">
          <el-menu-item v-if="!item.children" :index="item.path">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{ item.meta.title }}</span>
          </el-menu-item>
        </router-link>
      </template>
      <!-- 二级路由 -->
      <template v-for="item in menu">
        <el-submenu
          :index="item.path"
          :key="item.path.index"
          v-if="item.children"
        >
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{ item.meta.title }}</span>
          </template>
          <!-- 给a标签添加循环 -->
          <template v-for="child in item.children">
            <router-link
              :to="'/layout/' + item.path + '/' + child.path"
              :key="child.name"
            >
              <el-menu-item :index="child.name">
                <i :class="child.meta.icon"></i>
                <span slot="title">{{ child.meta.title }}</span>
              </el-menu-item>
            </router-link>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import Bus from "./EventBus";
export default {
  data() {
    return {
      isCollapse: false, //!控制折叠与展开
      menu: [],
    };
  },
  //
  //todo 自定义事件
  mounted() {
    Bus.$on("conMenu", this.handleMenu);
    this.menu = this.$store.state.routes[1].children;
  },
  //todo 删除自定义事件
  beforeDestroy() {
    Bus.$on("conMenu", this.handleMenu);
  },
  methods: {
    handleMenu() {
      this.isCollapse = !this.isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>