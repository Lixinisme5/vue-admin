<template>
  <div id="search-container">
    <div class="search-left">
      <el-input v-model="search" placeholder="用户名"></el-input>
      <el-button type="primary" @click="searchFun">筛选</el-button>
    </div>
    <div class="search-right">
      <el-button type="danger" @click="batchDeleteFun">批量删除</el-button>
      <el-button type="success" @click="addFun">添加</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchFun() {
      this.$emit("searchFun", this.search);
    },
    batchDeleteFun() {
      this.$emit("batchDeleteFun");
    },
    addFun() {
      this.$emit("openDialogFun");
    },
  },
};
</script>

<style lang="less" scoped>
#search-container {
  height: 66px;
  margin: 0 0 20px;
  padding: 0px 18px 0px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /deep/ .el-input__inner {
    width: 163px;
    height: 30px;
    margin-right: 10px;
  }

  .search-left {
    display: flex;
    align-items: center;
  }
}
</style>