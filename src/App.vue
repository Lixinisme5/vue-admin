<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import url("./assets/style/reset.less");

//!定义全局的主体色彩
//主体颜色
@mainBackgroundColor: "#f1f1f1";
@mainFontSize: 14px;
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  background-color: @mainBackgroundColor;
  font-size: @mainFontSize;
  color: #333;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
a {
  text-decoration: none;
}
</style>
