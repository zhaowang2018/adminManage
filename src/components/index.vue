<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="../../static/logo.png" alt>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <div class="title">电商后台管理系统</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="warning" @click="logout">退出</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="users" :unique-opened="true" :router="true">
          <el-submenu v-for="(role, index) in roles" :key="role.id" :index="index + ''">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{ role.authName }}</span>
            </template>
            <el-menu-item
              v-for="subRole in role.children"
              :key="subRole.id"
              :index="'/' + subRole.path"
            >
              <i class="el-icon-menu"></i>
              <span>{{ subRole.authName }}</span>
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
      roles:[

      ]
    };
  },
  created() {
    this.$axios.get("menus").then(res => {
      // console.log(res);
      this.roles = res.data.data;
    });
  },
  methods: {
    logout() {
      window.sessionStorage.removeItem("token");
      this.$router.push("login");
    }
  },
  beforeCreate() {
    // let token = window.sessionStorage["token"];
    // console.log(token);
    if (window.sessionStorage["token"]) {
      this.$message({
        message: "恭喜你，登录成功！",
        type: "success"
      });
    }else{
      this.$router.push('login');
    }
  }
};
</script>
<style lang="scss">
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
