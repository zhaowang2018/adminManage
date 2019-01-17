//把axios当初属性写入Vue原型  
import axios from 'axios';
//按需引入
import { Message } from 'element-ui';
// axios 支持设置基地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';
//暴露出去
export default {
    install(Vue) {
        // axios 请求前拦截器
        // 当不是登录的时候添加Authorization
        axios.interceptors.request.use(function (config) {
            // Do something before request is sent
            if (config.url !== '/login') {
                config.headers.Authorization = sessionStorage.getItem('token');
            }
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });
        //响应拦截器
        axios.interceptors.response.use(function (res) {
            if(res.data.meta.status === 200){
                // Vue.prototype.$message.success(res.data.meta.msg);
                Message.success(res.data.meta.msg);
            }else if(res.data.meta.status === 400){
                Message.error(res.data.meta.msg);
            }
            return res
        }, function (error) {
            // Do something with response error
            return Promise.reject(error);
        });
        Vue.prototype.$axios = axios;
    }
}

