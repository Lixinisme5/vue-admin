<template>
  <div id="container">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      @page-sizes="pageSizes()"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: ["total", "pageSize"],
  computed: {
    pageSizes() {
      let size = this.pageSizes;
      return [size, size * 2, size * 3, size * 4, size * 5];
    },
  },
  methods: {
    //!控制显示条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.$emit("sizeChange", val);
    },
    //!显示当前页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$emit("currentPage", val);
    },
  },
  data() {
    return {
      //!当夜选中页高亮显示
      currentPage4: 1,
    };
  },
};
</script>

<style lang="less" scoped>
#container {
  margin-top: 10px;
  text-align: center;
}
</style>