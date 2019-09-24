import Vue from 'vue'
import Router from 'vue-router'

import Myheader from './components/Myheader'

Vue.use(Router)

export default new Router({
    routes: [
        { path: "/myheader", component: Myheader }
    ]
})