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

//引入面包屑导航
import mybreadcrumb from './components/mybreadcrumb.vue'

//注册全局路由
Vue.component('mybreadcrumb',mybreadcrumb)

//引入全局时间格式过滤器 
import moment from 'moment';

Vue.filter('timeFormat',(value)=>{
  return moment(value).format('YYYY MM DD HH:mm:ss');
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
