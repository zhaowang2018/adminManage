<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="../../static/logo.png" alt>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple">
            <div class="title">电商后台管理系统</div>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <el-button type="warning" @click="logout">退出</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="201px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu v-for="(item, index) in memuList" :key="item.id" :index="item.order +''">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.authName}}</span>
            </template>
              <el-menu-item v-for="(it, v) in item.children" :key="it.id" :index="'/'+it.path">
                <i class="el-icon-menu"></i>
                {{it.authName}}
              </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      memuList:[]
    };
  },
  created() {
    this.$axios.get("menus").then(res => {
      // console.log(res);
      this.memuList = res.data.data;
    });
  },
  methods: {
    logout() {
      this.$confirm("是否确定要退出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });
          window.sessionStorage.removeItem("token");
          this.$router.push("login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消!"
          });
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.el-container {
  background-color: #e9eef3;
  .el-header {
    background-color: #b3d0c1;
    .title {
      font-size: 24px;
      color: #fff;
      line-height: 60px;
      text-align: center;
    }
    .el-button {
      margin-top: 10px;
    }
  }
}
</style>
