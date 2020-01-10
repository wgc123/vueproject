/*jshint esversion: 6 */
<template>
    <div id="comm">
        组件化开发
        <my-cpn></my-cpn>
    </div>
</template>

<script>
// 1.创建组件构造器对象
const cpnC = Vue.extend({
    template: ~
     <div> 
         <h2>我是一个组件</h2>
         <p>我是一个标签</p>
     </div>
      ~
});
// 2.注册组件
Vue.component('my-cpn',cpnC);


export default {
    
}
</script>