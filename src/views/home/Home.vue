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
    <PageComponent />
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
      tableData: [],
      search: "",
      show: false,
      row: {},
      btnType: 0, //0 添加  1  更新
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
    //!修改
    openUpdataDialog(row) {
      this.show = true;
      this.btnType = 1;
      this.row = row;
    },
    //!添加
    openDialog() {
      this.show = true;
    },
    closeDialog() {
      this.show = false;
    },
    //!批量删除
    batchDelete() {
      this.$refs.tablecom.batchDataFun();
      this.getHomeData();
    },
    homeSearchFun(val) {
      //!筛选
      this.search = val;
      this.getHomeData();
    },
    getHomeData() {
      //!复用搜索和首屏
      const params = {
        search: this.search, //!
      };
      getDataFun(params).then((res) => {
        //!发送请求
        // console.log(res);
        if (res.code === 200) {
          this.tableData = res.data; //!数据重新加载
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

