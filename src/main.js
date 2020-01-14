// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*jshint esversion: 6 */
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$store = store;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});

// 暴露样式 引用自定义样式 不建议
// require('./assets/css/base.css');

// axios({
//     url: 'http://123.207.32.32:8000/home/multidata',
//     method: 'get'
// }).then(res => {
//     console.log(res);
// })

import { request } from './network/request';

request({
    url: '/home/multidata'
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})


// request({
//     url: '/home/multidata'
// }, res => {
//     console.log(res);
// }, err => {
//     console.log(err);
// })