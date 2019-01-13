//导入Vue
import Vue from 'vue';
//导入路由
import VueRouter from 'vue-router';

//实例
Vue.use(VueRouter);

//导入路由
import login from '../components/login.vue'
import index from '../components/index.vue'
import users from '../components/users.vue'

//写规则
let routes = [
    {
        path: '/login',
        component: login
    },
    {
        path: '/',
        component: index,
        children: [
            {
                path: 'users',
                component: users
            }
        ]
    },
]
//实例路由
let router = new VueRouter({
    routes
})
//暴露出去
export default router