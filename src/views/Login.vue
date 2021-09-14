<template>
  <div id="container">
    <div class="from">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <h1>蟹堡王后台管理系统</h1>
        <Form-item prop="user">
          <Input
            type="text"
            v-model="formInline.user"
            placeholder="请输入用户名"
          >
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <br />
        <Form-item prop="password">
          <Input
            type="password"
            v-model="formInline.password"
            placeholder="请输入密码"
          >
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <br />
        <Form-item>
          <Button type="warning" @click="handleSubmit('formInline')"
            >登录</Button
          >
        </Form-item>
      </Form>
    </div>
  </div>
</template>

<script>
import { loginApi } from "../api/login";
import { setCookie } from "../utils/cookieUtiles";
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: "",
      },
      ruleInline: {
        user: [{ required: true, message: "请填写用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请填写密码", trigger: "blur" },
          {
            type: "string",
            min: 6,
            message: "密码长度不能小于6位",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          //!验证通过发请求
          loginApi(this.formInline).then((res) => {
            console.log("登录返回的信息", res);
            if (res.code === 200) {
              this.$Message.success("提交成功!");
              //!1、设置cookie
              setCookie("token", "res.data.token");

              //!跳转到首页
              this.$router.push("/");
            } else if (res.code === 101) {
              this.$Message.error("账号或密码输入错误!");
            }
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
#container {
  background: url("../assets/img/zm.jpg");
  width: 100%;
  height: 100%;
  background-size: cover;
  .from {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 370px;
    height: 320px;
    background-color: rgba(255, 255, 2555, 0.5);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    h1 {
      margin-bottom: 30px;
      color: rgb(8, 1, 1);
      font-weight: bold;
    }
    .ivu-form {
      text-align: center;
      margin-top: 30px;
      width: 80%;
      .ivu-form-item {
        width: 100% !important;
      }
      .ivu-btn {
        margin-top: 20px;
        width: 100%;
      }
    }
  }
}
</style>