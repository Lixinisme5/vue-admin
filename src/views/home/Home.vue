<template>
  <div class="home">
    <!-- 搜索组件 -->
    <SearchComponent
      @searchFun="homeSearchFun"
      @batchDeleteFun="batchDelete"
      @openDialogFun="openDialog"
    />
    <!-- 表格组件 -->
    <TableComponent
      ref="tablecom"
      :tableData="tableData"
      @getTableData="getHomeData"
      @openDialog="openUpdataDialog"
    />
    <!-- 分页组件 -->
    <PageComponent
      :total="total"
      :pageSize="pageSize"
      @currentPage="currentPage"
      @sizeChange="sizeChange"
    />
    <!-- 弹出层 -->
    <Dialog
      v-if="show"
      :row="row"
      :btnType="btnType"
      @closeDialog="closeDialog"
      @getHomeData="getHomeData"
    ></Dialog>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import SearchComponent from "./components/SearchComponent.vue";
import TableComponent from "./components/TableComponent.vue";
import PageComponent from "./components/PageComponent.vue";
import Dialog from "./components/Dialog.vue";
import { getDataFun } from "../../api/home";
export default {
  name: "Home",
  data() {
    return {
      tableData: [], //*数据
      search: "", //*搜索
      show: false, //*弹窗隐藏
      row: {}, //*每一条数据
      btnType: 0, //*0 添加  1  更新
      total: 0, //*总数据
      page: 1, //*当前页码
      pageSize: 10, //*每页显示条数
    };
  },
  components: {
    SearchComponent,
    TableComponent,
    PageComponent,
    Dialog,
  },
  mounted() {
    this.getHomeData(); //!首屏
  },
  methods: {
    //!每页显示条数
    sizeChange(val) {
      this.pageSize = val;
      this.getHomeData();
    },
    //!分页显示当前页
    currentPage(val) {
      this.page = val;
      this.getHomeData();
    },
    //!修改
    openUpdataDialog(row) {
      this.row = row;
      this.btnType = 1;
      this.show = true;
    },
    //!添加
    openDialog() {
      this.btnType = 0;
      this.show = true;
    },
    //!关闭弹框
    closeDialog() {
      this.show = false;
    },
    //!批量删除
    batchDelete() {
      this.$refs.tablecom.batchDataFun();
      this.getHomeData();
    },
    //!筛选
    homeSearchFun(val) {
      this.search = val;
      this.getHomeData();
    },
    getHomeData() {
      //!复用搜索和首屏 分页
      const params = {
        search: this.search, //!搜索
        page: this.page,
        pageSize: this.pageSize,
      };
      getDataFun(params).then((res) => {
        //!发送请求
        console.log("返回的数据", res);
        if (res.code === 200) {
          this.tableData = res.data; //!数据重新加载
          this.total = res.total;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  padding: 20px;
  background-color: #f0f1f4;
}
</style>

