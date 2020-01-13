<template>
  <div id="app">
    <!-- <router-link to="/comm">路由嵌套</router-link> -->
    <!-- :to 绑定  对象：第一个参数：跳转  第二个参数：query对象里面要传递的查询参数 -->
    <!-- <router-link :to="{path:'me',query:{name:'张三',age:17}}">query 路由传参</router-link> -->
    <!-- <br> -->
    <router-view></router-view>

      <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <img slot="item-icon" src = "~assets/img/img1.png">
        <img slot="item-icon-active" src = "~assets/img/img1-actived.png">
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/category" activeColor="red">
        <img slot="item-icon" src = "~assets/img/img2.png">
        <img slot="item-icon-active" src = "~assets/img/img2-actived.png">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="red">
        <img slot="item-icon" src = "~assets/img/img3.png">
        <img slot="item-icon-active" src = "~assets/img/img3-actived.png">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="red">
        <img slot="item-icon" src = "~assets/img/img4.png">
        <img slot="item-icon-active" src = "~assets/img/img4-actived.png">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>


  </div>
</template>

<script>
import TabBar from './components/common/tabbar/TabBar';
import TabBarItem from './components/common/tabbar/TabBarItem';
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
   TabBar,
    TabBarItem
  }

}
</script>

<style>
 @import "./assets/css/base.css";
 
</style>
