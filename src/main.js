import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入Vuex
import store from './store'

//引入图标文件
import "./font/iconfont.css"

// 配置mint-ui组件库
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MintUI)

// 配置axios库
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://127.0.0.1:8088/";
Vue.prototype.axios = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')