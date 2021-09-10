<template>
  <div class="home">
    <div class="header">
      <Header />
    </div>
    <div class="container">
      <div class="aside">
        <Aside />
      </div>
      <div class="main">
        <div class="bread">
          <Bread />
        </div>
        <main>
          <router-view></router-view>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Bread from "./Bread.vue";
import Header from "./Header.vue";
import Aside from "./Aside.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    Bread,
    Header,
    Aside,
    Footer,
  },
};
</script>

<style lang='less'>
.header {
  position: fixed;
  height: 60px;
  top: 0px;
  left: 0px;
  right: 0px;
  border-bottom: 1px solid #f1f1f1;
}
.container {
  width: 100%;
  display: flex;
  position: fixed;
  top: 60px;
  height: 100%;

  .aside {
    width: auto;
  }
  .main {
    flex-grow: 1;
    width: 100%;
    overflow: auto;
    height: calc(100vh - 60px);

    //面包屑
    .bread {
      // display: flex;
      width: 100%;
      height: 30px;
    }
    //主体内容
    main {
      width: 100%;
      height: calc(100vh - 170px);
      overflow: auto;
    }
    //底部
    footer {
      position: fixed;
      bottom: 0px;
      height: 80px;
      width: 100%;
      background-color: #f5f5f5;
    }
  }
}
</style>