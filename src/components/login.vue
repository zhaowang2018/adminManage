<template>
  <div class="login">
    <div class="login-container">
      <h2>登录</h2>
      <el-form
        label-position="top"
        :rules="rules"
        ref="formData"
        label-width="80px"
        :model="formData"
      >
        <el-form-item label="用户名" prop="user">
          <el-input v-model="formData.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" text="password">
          <el-input type='password'  v-model="formData.password"></el-input>
        </el-form-item>
        <el-button class="btn-login" @click="submitForm('formData')" type="success">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      formData: {
        user: "",
        password: ""
      },
      rules: {
        user: [
          { required: true, message: "请输入用户名", trigger: "change" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "change" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //验证成功
          this.$axios.post("login",{
            username:this.formData.user,
            password:this.formData.password
          }).then(res => {
            // console.log(res);
            if (res.data.meta.status == 200) {   
              window.sessionStorage.setItem('token',res.data.data.token);
              //验证成功 跳转到index 页面
              this.$router.push('/');
            }
          });
        } else {
          //验证不通过
          this.$message.error("请输入正确的用户名和密码");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.login {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-container {
    width: 580px;
    background-color: #fff;
    border-radius: 10px;
    padding: 40px;
    box-sizing: border-box;
  }
  .btn-login {
    width: 100%;
  }
}
</style>
