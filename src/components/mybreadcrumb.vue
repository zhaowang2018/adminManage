<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="my-height">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{nav2}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{nav3}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
    props:['nav2','nav3']
};
</script>
<style>
.my-height{
    height: 45px;
    line-height: 45px;
}
</style>
