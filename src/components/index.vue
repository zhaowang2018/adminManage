<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="/static/logo.png" alt>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <div class="title">电商后台管理系统</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <a href="#" @click.prevent="logout" class="logout-btn">退出</a>
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
  name: "index"
};
</script>
<style>
.el-container {
    background-color: #ccc;
}
</style>
