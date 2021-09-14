<template>
  <div id="container">
    <div class="left">
      <img :src="img" alt="" />
      <p class="text">{{ name }}</p>
    </div>
    <ul class="right">
      <li><i class="iconfont icon-github-fill"></i></li>
      <li><i class="iconfont wxicon">&#xe665;</i></li>
      <li><i class="iconfont qqicon">&#xe882;</i></li>
      <li>
        <el-dropdown>
          <span class="el-dropdown-link"> <img :src="zhflag" /></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              ><img class="zhflag" :src="zhflag" /> 中文</el-dropdown-item
            >
            <el-dropdown-item><img :src="ukflag" />英文</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li>
        <el-dropdown class="my" @command="handleCommand">
          <span class="el-dropdown-link">
            <p class="hello">
              你好，<span>{{ username }}</span
              ><img :src="hea" />
            </p>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">设置</el-dropdown-item>
            <el-dropdown-item command="b">个人中心</el-dropdown-item>
            <el-dropdown-item command="c">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </ul>
  </div>
</template>

<script>
import logo from "../assets/img/logo.jpeg";
import hea from "../assets/img/icon.jpeg";
import zhflag from "../assets/img/zhflag.png";
import ukflag from "../assets/img/ukflag.jpeg";
import { removeCookie } from "../utils/cookieUtiles";

export default {
  data() {
    return {
      username: "海绵宝宝",
      name: "蟹堡王后台管理",
      img: logo,
      hea: hea,
      zhflag: zhflag,
      ukflag: ukflag,
    };
  },
  methods: {
    handleCommand(command) {
      console.log(command);
      if (command === "c") {
        //!退出  1、清楚cookie   2、跳转到login
        this.$confirm("确定要退出吗?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "推出成功!",
            });
            removeCookie("token");
            this.$router.push("/login");
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除",
            });
          });
      }
    },
  },
};
</script>

<style lang="less" scoped>
#container {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    width: 280px;
    height: 60px;
    display: flex;
    align-items: center;
    color: gold;
    img {
      width: 45px;
      height: 30px;
      padding-left: 10px;
    }
    .text {
      margin-left: 5px;
      font-size: 26px;
    }
  }
  .right {
    width: 340px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
    .icon-github-fill {
      color: gray;
    }
    .wxicon {
      color: #51c332;
    }
    .qqicon {
      color: hotpink;
    }
    img {
      width: 24px;
      height: 24px;
    }
    .hello {
      display: flex;
      align-items: center;
      color: #909399;
      span:hover {
        color: gold;
      }
      img {
        margin: 0px 10px;
      }
    }
  }
}
</style>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  display: flex;
  align-items: center;
  color: #999;
  margin-top: 5px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown-menu__item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-dropdown-menu__item .zhflag {
  width: 24px !important;
  height: 24px !important;
  border-radius: 70%;
}
.el-dropdown-menu__item > img {
  width: 24px !important;
  height: 24px !important;
  border-radius: 50%;
}
</style>