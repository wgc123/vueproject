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

// 一般组件加载
// import HelloWorld from '@/components/HelloWorld';
// import Books from '@/components/Books';
// import Comm from '@/components/Comm';

// 懒加载组件  哪里需要哪里加载
const HelloWorld = () =>
    import ('../components/HelloWorld');

const Books = () =>
    import ('../components/Books');

const Comm = () =>
    import ('../components/Comm');

const CommNews = () =>
    import ('../components/CommNews');

const CommMessage = () =>
    import ('../components/CommMessage');

const Me = () =>
    import ('../components/Me');


const Home = () =>
    import ('../views/home/Home');

const Category = () =>
    import ('../views/category/Category');

const Shopcart = () =>
    import ('../views/cart/Shopcart');

const Profile = () =>
    import ('../views/profile/Profile');

const More = () =>
    import ('../views/more/More');


export default new Router({
    routes: [{
            path: ' ',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/category',
            component: Category
        },
        {
            path: '/shopcart',
            component: Shopcart
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/more',
            component: More
        },


        {
            path: '/comm',
            component: Comm,
            //路由嵌套
            children: [{
                    path: 'news',
                    component: CommNews
                },
                {
                    path: 'message',
                    component: CommMessage
                },
                {
                    path: ' ',
                    redirect: 'news'
                }
            ]
        },
        {
            path: '/hello',
            component: HelloWorld
        },
        {
            path: '/book',
            component: Books
        },
        {
            path: '/me',
            component: Me
        }

    ]
});

// 路由要放在最后面，不然路由找不到相应的vue
Vue.use(Router);