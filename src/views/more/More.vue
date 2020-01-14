<template>
  <div>
    <router-link to="hello">vue 基础</router-link>
    <router-link to="book">vue 购物</router-link>
     <router-link to="/comm">路由嵌套</router-link>
    <!-- :to 绑定  对象：第一个参数：跳转  第二个参数：query对象里面要传递的查询参数 -->
    <router-link :to="{path:'me',query:{name:'张三',age:17}}">query 路由传参</router-link>
    <br>
    <!-- 拿到vuex里面定义的数值 -->
    <h2>{{$store.state.counter}}</h2>
    <button @click="add()">+</button>
    <button @click="sub()">-</button>

<h5>{{promisemessage}}</h5>


<h5>------------axios网络请求---------</h5>


  </div>
</template>
<script>
export default {
  name:'More',
  data(){
    return{
     promisemessage:'promise 使用主要是异步加载数据或者网络请求'
    }
  },
  methods:{
    add(){
      // 调用store里面的方法
      this.$store.commit('increment');
    },
    sub(){
      this.$store.commit('decrement');
    },

    promiseInfo(){
      // resolve 成功  reject失败
     new Promise((resolve,reject) =>{
       setTimeout(() => {
         //成功的时候调用
         resolve();


         //失败的时候调用
        //  reject();
       }, 1000);

     }).then(() =>{
       // 成功的时候调用then 
     }).catch((err) =>{
       //错误的时候捕获异常
     })
    }
  }
}
</script>