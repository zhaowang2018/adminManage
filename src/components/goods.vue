<template>
  <div class="users">
    <el-row>
      <el-col :span="24">
        <mybreadcrumb nav2="商品管理" nav3="商品列表"></mybreadcrumb>
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
        <el-button type="success" plain>添加商品</el-button>
      </el-col>
    </el-row>

    <el-table style="width: 100%" border :data="goodsList">
      <el-table-column label="#" width="50" type="index"></el-table-column>
      <el-table-column prop="goods_name" label="商品名称" width="600"></el-table-column>
      <el-table-column prop="goods_price" label="商品价格" width="100"></el-table-column>
      <el-table-column prop="goods_weight" label="商品重量" width="100"></el-table-column>
      <el-table-column prop="add_time" label="创建时间" width="300">
        <!-- 过滤器 -->
        <template slot-scope="prop">
          {{prop.row.add_time | timeFormat}}
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
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="SizeChange"
      @current-change="currentChange"
      :current-page="pageData.pagenum"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pageData.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "goods",
  data() {
    return {
      pageData: {
        query: "",
        pagenum: 1,
        pagesize: 10
      },
      total: 0,
      goodsList: []
    };
  },
  async created() {
    this.getpageData();
  },
  methods: {
    async getpageData() {
      let res = await this.$axios.get("goods", {
        params: this.pageData
      });

      // console.log(res);
      this.goodsList = res.data.data.goods;
      this.total = res.data.data.total;
    },
    currentChange(pagenum) {
      this.pageData.pagenum = pagenum;
      this.getpageData();
    },
    SizeChange(pagesize) {
      this.pageData.pagesize = pagesize;
      this.getpageData()
    }
  }
};
</script>
<style>
.el-tag {
  margin: 10px;
}
</style>

