# vueproject
Vue学习笔记

安装vue环境
1、必须要安装nodejs
安装淘宝镜像：
npm install -g cnpm --registry=https://registry.npm.taobao.org

2、搭建vue的开发环境 ，安装vue的脚手架工具   官方命令行工具

npm install -g @vue/cli  /   cnpm install -g @vue/cli         （此命令只需要执行一次）
如果更高的版本想用2.x的版本通过命令：
npm install -g @vue/cli-init


创建vue项目

vue init webpack vue-demo01

cd  vue-demo01 

cnpm install   /  npm install如果创建项目的时候没有报错，这一步可以省略。如果报错了  cd到项目里面运行  cnpm install   /  npm install
		
npm run dev  运行

代码监测报错

/*jshint esversion: 6 */

(function() {　　
    "use strict";　　 // some code here
})();


1月8号学习vue总结：

  指令：v-on  绑定点击事件
  
  指令：v-cloak 解决闪烁问题（网络不好或者没有执行vue解析之前显示给用户展示）
  
  指令：v-text 文本  
  
  指令：v-html 
  
  指令：v-once 显示数据，改变数据后不会改变值
  
  指令：v-pre 不解析{{}} 
  
  绑定v-bind动态属性绑定，可简写为“：” 
  
  eg: <img :src="图片地址" >  或者 <img v-bind:src="图片地址">
  
  
  
  1月9号
  1.动态绑定class对象、数组
  
  2.动态绑定style对象、数组
  
  数组的一些操作方法：
  push： 增加到数组最后一个元素；
  unshift  增加到数组第一个元素；
  pop: 删除数组最后一项；
  shift: 删除数组第一个元素；
  splice：删除元素、插入元素、替换元素  （最重要的就是第二个参数）
  sort：排序
  
  toFixed 保留小数  toFixed(2)保存两位小数
  
  v-model使用
  v-model修饰符 
    1.lazy 可以让数据在失去焦点或者回车时才会更新；
	2.number 可以在输入框中输入的内容自动转成数字类型；
	     typeof 获取类型
	3.trim 过滤内容左右两边的内容
	
	
	组件化开发
	  注册组件 
	  1.调用vue.extend()方法创建组件构造器
	  2.调用vue.component()方法注册组件
	  3.在vue范围使用组件
	  
	路由跳转
	 this.$router.push('/')
	 this.$router.replace('/')
	 
	 
	 
	 
	 
	 
	 
	 
	 
  
