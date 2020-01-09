/*jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error);
};
import HelloWorld from '@/components/HelloWorld';
import Books from '@/components/Books';


export default new Router({
    routes: [{
            path: '/hello',
            component: HelloWorld
        },
        {
            path: '/book',
            component: Books
        },
        {
            path: '*',
            component: HelloWorld
        }

    ]
});

// 路由要放在最后面，不然路由找不到相应的vue
Vue.use(Router);