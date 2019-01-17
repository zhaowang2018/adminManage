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
import roles from '../components/roles.vue'
import rights from '../components/rights.vue'
import goods from '../components/goods.vue'

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
            },
            {
                path: 'roles',
                component: roles
            },
            {
                path: 'rights',
                component: rights
            },
            {
                path: 'goods',
                component: goods
            },
        ]
    },
]
//实例路由
let router = new VueRouter({
    routes
})
//导航守卫 控制登录
router.beforeEach((to, from, next) => {
    next();
    if (to.path === '/login') {
        next();
    } else {
        let token = window.sessionStorage.getItem('token');
        if (token) {
            next();
        } else {
            Vue.prototype.$message.error('请先登录');
            next('/login');
        }
    }
})
//暴露出去
export default router