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
          <span class="el-dropdown-link">
            <img :src="hea" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><img :src="hea" />中文</el-dropdown-item>
            <el-dropdown-item>英文</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li>
        <el-dropdown class="my">
          <span class="el-dropdown-link">
            <p class="hello">你好，<span>管理员</span><img :src="hea" /></p>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
            <el-dropdown-item></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </ul>
  </div>
</template>

<script>
import logo from "../assets/logo.png";
import hea from "../assets/icon.png";
export default {
  data() {
    return {
      name: "后台管理",
      img: logo,
      hea: hea,
    };
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
    width: 180px;
    height: 60px;
    display: flex;
    align-items: center;
    img {
      width: 36px;
      height: 36px;
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
      width: 28px;
      height: 28px;
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
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>