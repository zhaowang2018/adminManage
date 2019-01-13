import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'//路由

Vue.use(VueRouter)
//el-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入初始样式
import "./assets/basestyle.css";
//引入 axios 文件
import VueAxios from './lib/axios';
Vue.use(VueAxios);
Vue.config.productionTip = false

//引入抽取的路由文件
import router from './lib/router';




new Vue({
  render: h => h(App),
  router
}).$mount('#app')
