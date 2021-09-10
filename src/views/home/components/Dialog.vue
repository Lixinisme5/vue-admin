<template>
  <div>
    <el-dialog
      title="新增资金信息"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
      :modal-append-to-body="false"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="收支类型" prop="payType">
          <el-select v-model="ruleForm.payType" placeholder="请选择收支类型">
            <el-option label="提现" value="1"></el-option>
            <el-option label="优惠卷" value="2"></el-option>
            <el-option label="转帐" value="3"></el-option>
            <el-option label="现金" value="4"></el-option>
            <el-option label="银联" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="籍贯" prop="address">
          <el-cascader
            v-model="ruleForm.address"
            :options="options"
            clearable
          ></el-cascader>
        </el-form-item>
        <el-form-item label="收入" prop="income">
          <el-input v-model="ruleForm.income"></el-input>
        </el-form-item>
        <el-form-item label="支出" prop="pay">
          <el-input v-model="ruleForm.pay"></el-input>
        </el-form-item>
        <el-form-item label="账户现金" prop="money">
          <el-input v-model="ruleForm.money"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import area from "../../../assets/data/area.json";
import { addDataFun, getDataFun, updateData } from "../../../api/home";
export default {
  props: ["row", "btnType"],
  data() {
    return {
      dialogVisible: true,
      ruleForm: {
        payType: "",
        name: "",
        address: "",
        income: "",
        pay: "",
        money: "",
      },
      options: area,
      rules: {
        payType: [
          { required: true, message: "请选择收支类型", trigger: "change" },
        ],
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 4, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        address: [{ required: true, message: "请选择籍贯", trigger: "change" }],
        income: [{ required: true, message: "请输入收入", trigger: "blur" }],
        pay: [{ required: true, message: "请输入支出", trigger: "blur" }],
        money: [{ required: true, message: "请输入账户现金", trigger: "blur" }],
      },
    };
  },

  //!生命周期  创建后
  created() {
    //!点击修改时
    if (this.btnType === 1) {
      this.row.payType = this.row.payType + ""; //类型是number  在传输过程中会变成string
      //!将原来的数据放入到表格
      //!防止将对象的地址直接复制  对对象进行深拷贝 先转字符串 在转对象 专破对象引用
      //todo 法一：深拷贝
      this.ruleForm = JSON.parse(JSON.stringify(this.row));
      //todo 法二：扩展符
      //! this.ruleForm = { ...this.row };
    }
  },
  methods: {
    //!关闭弹窗
    handleClose() {
      this.$emit("closeDialog");
    },
    addressFun(val, opt) {
      return val.map(function (value, index, array) {
        for (var item of opt) {
          if (item.value == value) {
            opt = item.children;
            return item.label;
          }
        }
        return null;
      });
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //todo 发送请求之前对地址进行转换
          //*获取当前的地址
          let address = this.ruleForm.address;
          address = this.addressFun(address, this.options);
          console.log("修改后的地址", address);
          address = address.join("");
          this.ruleForm.address = address;
          if (this.btnType === 0) {
            addDataFun(this.ruleForm).then((res) => {
              console.log("添加请求", res);
              if (res.code === 200) {
                this.$emit("closeDialog");
                this.$emit("getHomeData");
              }
            });
          } else {
            updateData(this.ruleForm).then((res) => {
              console.log("修改请求", res);
              if (res.code === 200) {
                this.$emit("getHomeData");
                this.$emit("closeDialog");
              }
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style>
</style>