//把axios当初属性写入Vue原型  
import axios from 'axios';

// axios 支持设置基地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';
//暴露出去
export default {
    install(Vue) {
        // axios 拦截器
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
        Vue.prototype.$axios = axios;
    }

}