<template>
  <div class="users">
    <el-row>
      <el-col :span="24">
        <mybreadcrumb nav2="权限管理" nav3="角色列表"></mybreadcrumb>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-input placeholder="请输入内容">
          <template slot="append">
            <i class="el-icon-search"></i>
          </template>
        </el-input>
      </el-col>
      <el-col :span="16">
        <el-button type="success" plain>添加用户</el-button>
      </el-col>
    </el-row>

    <el-table style="width: 100%" border :data="rolesList">
      <el-table-column label="#" width="30" type="index"></el-table-column>
      <el-table-column type="expand">
        <!-- 模板 -->
        <template slot-scope="props">
          <el-row v-for="item in props.row.children" :key="item.id">
            <el-col :span="4">
              <el-tag closable>{{item.authName}}</el-tag>
              <i class="el-icon-arrow-right"></i>
            </el-col>
            <el-col :span="16">
              <el-row v-for="it in item.children" :key="it.id">
                <el-col :span="4">
                  <el-tag closable type="success">{{it.authName}}</el-tag>
                  <i class="el-icon-arrow-right"></i>
                </el-col>
                <el-col :span="20">
                  <el-tag closable v-for="v in it.children" :key="v.id">{{v.authName}}</el-tag>
                  <i class="el-icon-arrow-right"></i>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row :span="24" v-if="props.row.children.length === 0">
            <el-col>
              <span>没有设置权限</span>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column prop="roleName" label="角色名称" width="300"></el-table-column>
      <el-table-column prop="roleDesc" label="角色描述" width="300"></el-table-column>
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
      rolesList: []
    };
  },
  async created() {
    let res = await this.$axios.get("roles");

    // console.log(res);
    this.rolesList = res.data.data;
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

