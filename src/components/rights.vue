<template>
  <div class="users">
    <el-row>
      <el-col :span="24">
        <mybreadcrumb nav2="权限管理" nav3="权限列表"></mybreadcrumb>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-input placeholder="请输入内容" >
          <template slot="append">
            <i class="el-icon-search"></i>
          </template>
        </el-input>
      </el-col>
      <el-col :span="16">
        <el-button type="success" plain>添加用户</el-button>
      </el-col>
    </el-row>

    <el-table style="width: 100%" border :data="rightsList">
      <el-table-column label="#" width="60" type="index"></el-table-column>
      <el-table-column prop="authName" label="权限名称" width="300"></el-table-column>
      <el-table-column prop="path" label="路径" width="300"></el-table-column>
      <el-table-column prop="level" label="层级" width="300">
        <template slot-scope="scope">
          <span v-if="scope.row.level === '0'">一级</span>
          <span v-if="scope.row.level === '1'">二级</span>
          <span v-if="scope.row.level === '2'">三级</span>
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
  </div>
</template>
<script>
export default {
  name: "users",
  data() {
    return {
      rightsList: []
    };
  },
  async created() {
    let res = await this.$axios.get("rights/list");

    // console.log(res);
    this.rightsList = res.data.data;
  },
  methods: {

  }
};
</script>
<style>
.el-tag {
  margin: 10px;
}
</style>

