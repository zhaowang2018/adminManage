import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'//路由

Vue.use(VueRouter)
//el-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//把axios当初属性写入Vue原型  
import axios from 'axios';
Vue.prototype.$axios = axios;
// axios 支持设置基地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';
Vue.config.productionTip = false

//引入路由
import login from './components/login.vue';
import index from './components/index.vue';
//index子组件
import main from './components/main.vue';
//实例化 路由


new Vue({
  render: h => h(App),
  router: new VueRouter({
    routes: [
      { 
        path: '/', 
        redirect: '/index' 
      },
      {
        path: '/index',
        component: index,
        children: [
          {
            path:'',
            component: main
          }
        ]
      },
      { 
        path: '/login', 
        component: login 
      }
    ]
  })
}).$mount('#app')
