<template>
  <div class="users">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-input placeholder="请输入内容" v-model="search" clearable class="search">
      <i slot="suffix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-button type="primary" plain @click="addUser">添加用户</el-button>
    <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="index" label="#"></el-table-column>
      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="150"></el-table-column>
      <el-table-column prop="mobile" label="电话" width="150"></el-table-column>
      <el-table-column prop="status" label="用户状态"></el-table-column>
      <el-table-column prop="operate" label="操作"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "users",
  data() {
    return {
      search: ""
    };
  },
  created() {
    this.$axios
      .get("users", {
        pagenum: 1,
        pagesize: 5
      })
      .then(res => {
        console.log(res);
      });
  },
  methods: {
    addUser() {
        const user = this.$createElement;
      this.$msgbox({
        title: "添加用户",
        message: user('input',null,[
            user('input',null,'用户名')
        ])
      });
    }
  }
};
</script>
<style>
.search {
  width: 300px;
}
</style>

