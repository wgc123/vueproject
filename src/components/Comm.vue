/*jshint esversion: 6 */
<template>
    <div id="comm">
        <button @click="goNews()">新闻</button>
        <button @click="goMessage()">消息</button>
        <br>
        <br>
      <router-link to="/book">
      <button>上一页</button>
    </router-link>

     <router-link to="/me">
      <button>下一页</button>
    </router-link>

    <button @click="meClick()">通过点击事件query传值</button>
     <router-view></router-view>

    </div>

</template>

<script>


export default {
   data(){
     return{

     }
   },
   created(){
    document.title = '我的';
  },
   methods:{
     goNews(){
       this.$router.push('/comm/news');
     },
     goMessage(){
       this.$router.push('/comm/message');
     },
    //  通过点击事件传递参数
     meClick(){
       this.$router.push({
         path:'me',
         query:{
           name:'qyery传参',
           age:17
         }
       })
     }
   } 
}
</script>