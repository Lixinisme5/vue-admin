<template>
  <div id="table">
    <el-table
      ref="multipleTable"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <!-- 复选框 -->
      <el-table-column type="selection" width="55"> </el-table-column>
      <!-- 用户名 -->
      <el-table-column
        prop="name"
        label="用户名"
        align="center"
      ></el-table-column>
      <!-- 籍贯 -->
      <el-table-column
        label="籍贯"
        align="center"
        width="220px"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <span style="color: #00d053">+&nbsp;{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <!-- 投资时间 -->
      <el-table-column label="投资时间" align="center" width="170px">
        <template slot-scope="scope">
          <span>
            <i class="el-icon-time"></i>&nbsp;&nbsp;{{ scope.row.payDate }}
          </span>
        </template>
      </el-table-column>
      <!-- 收支类型 -->
      <el-table-column label="收支类型" align="center">
        <template slot-scope="scope">
          {{ payTypeObj[scope.row.payType] }}
        </template>
      </el-table-column>
      <!-- 收入 -->
      <el-table-column label="收入" align="center">
        <template slot-scope="scope">
          <span style="color: #00d053"
            >+&nbsp;
            {{ scope.row.income }}
          </span>
        </template>
      </el-table-column>
      <!-- 支出 -->
      <el-table-column label="支出" align="center">
        <template slot-scope="scope">
          <span style="color: #f56767">
            {{ scope.row.pay }}
          </span>
        </template>
      </el-table-column>
      <!-- 账户现金 -->
      <el-table-column label="账户现金" align="center">
        <template slot-scope="scope">
          <span style="color: #4db3ff">
            {{ scope.row.money }}
          </span>
        </template>
      </el-table-column>
      <!-- 操作 -->
      <el-table-column label="操作" align="center" width="180px">
        <template slot-scope="scope">
          <el-button type="warning" size="small" @click="handleEdit(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            size="small"
            @click="handleDelete(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { deleteById, batchDeleteById } from "../../../api/home";
export default {
  props: ["tableData"],
  data() {
    return {
      payTypeObj: {
        1: "提现",
        2: "优惠卷",
        3: "转帐",
        4: "现金",
        5: "银联",
      },
      ids: [],
      //tableData: [
      // {
      //   name: "王小虎",
      //   address: "上海市 普陀区 金沙江路 1518 弄",
      //   payDate: "2016-05-03",
      //   payType: 1, //数字类型  映射成字符串
      //   income: 5000,
      //   pay: 2000,
      //   money: 3000,
      // },
      // {
      //   name: "王小虎",
      //   address: "上海市 普陀区 金沙江路 1518 弄",
      //   payDate: "2016-05-02",
      //   payType: 2,
      //   income: 5000,
      //   pay: 2000,
      //   money: 3000,
      // },
      // {
      //   name: "王小虎",
      //   address: "上海市 普陀区 金沙江路 1518 弄",
      //   payDate: "2016-05-04",
      //   payType: 3,
      //   income: 5000,
      //   pay: 2000,
      //   money: 3000,
      // },
      // ],
    };
  },

  methods: {
    //!批量删除
    batchDataFun() {
      batchDeleteById({ ids: this.ids.toString() }).then((res) => {
        console.log(res);
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      this.ids = [];
      val.forEach((item) => {
        this.ids.push(item.id);
      });
    },
    handleEdit(row) {
      this.$emit("openDialog", row);
    },
    handleDelete(id) {
      deleteById({ id: id }).then((res) => {
        console.log(res);
        if (res.code === 200) {
          this.$emit("getTableData"); //刷新表格
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
#table {
  overflow: auto;
}
</style>