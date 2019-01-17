<template>
  <div class="users">
    <el-row>
      <el-col :span="24">
        <mybreadcrumb nav2="用户管理" nav3="用户列表"></mybreadcrumb>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-input placeholder="请输入内容" v-model="pageData.query" >
          <template slot="append">
            <i class="el-icon-search" @click="query"></i>
          </template>
        </el-input>
      </el-col>
      <el-col :span="16">
        <el-button type="success" plain >添加用户</el-button>
      </el-col>
    </el-row>

    <el-table style="width: 100%" border :data="userList">
      <el-table-column label="#" width="30" type="index"></el-table-column>
      <el-table-column prop="username" label="姓名" width="300"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="300"></el-table-column>
      <el-table-column prop="mobile" label="电话" width="300"></el-table-column>
      <el-table-column prop="mg_state" label="用户状态" width="110">
        <template slot-scope="scope">
          <!-- @change="(val) => {
            handleChange(val, scope.row.id)
          }"-->
          <el-switch
            v-model="scope.row.mg_state"
            @change="isdisable(scope.row.mg_state,scope.row.id)"
            active-color="#13ce66"
            inactive-color="#ff4949"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" plain icon="el-icon-edit"></el-button>
          <el-button
            size="mini"
            type="danger"
            plain
            icon="el-icon-delete"
            @click="delOne(scope.row.id)"
          ></el-button>
          <el-button size="mini" type="warning" plain icon="el-icon-check"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="pageData.pagenum"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="pageData.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageData.total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "users",
  data() {
    return {
      pageData: {
        query: "",
        pagenum: 1,
        pagesize: 10
      },
      total: 0,
      userList: []
    };
  },
  created() {
    this.$axios
      .get("users", {
        params: this.pageData
      })
      .then(res => {
        // console.log(res);
        this.userList = res.data.data.users;
        this.total = res.data.data.total;
      });
  },
  methods: {
    //用户状态修改
    isdisable(type, id) {
      parseInt(this.id);
      this.$axios.put(`users/${id}/state/${type}`).then(res => {
        console.log(res);
      });
      this.$message.success("修改成功!");
    },
    //用户删除逻辑
    delOne(id) {
      // console.log(id);
      this.$axios.delete(`users/${id}`).then(res => {
        // console.log(res);
        //重新刷新页面
        this.$axios
          .get("users", {
            params: this.pageData
          })
          .then(res => {
            // console.log(res);
            this.userList = res.data.data.users;
            this.total = res.data.data.total;
          });
      });
    },
    query() {
      this.$axios
        .get("users", {
          params: this.pageData
        })
        .then(res => {
          // console.log(res);
          this.userList = res.data.data.users;
          this.total = res.data.data.total;
        });
    }
  }
};
</script>
<style>
</style>

