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
	  
	页面跳转：
	   router-link to:''
	  
	路由跳转：
	  1.this.$router.push('/')
	  2.this.$router.replace('/')
	  
	路由懒加载：
	 const HelloWorld = () => import ('../components/HelloWorld');
	 
	路由嵌套使用：
	   //路由嵌套
            children: [{
                    path: 'news',
                    component: CommNews
                },
                {
                    path: 'message',
                    component: CommMessage
                }
            ]
	
	路由传参（params和query）：
	  1.params的类型：
	    配置路由格式：/router/:id
		传递的方式：在path后面跟上对应的值
		传递后形成的路劲：/router/123,/router/adb
		使用：
	  2.query的类型：
	    配置路由格式：/router 也就是普通配置
		传递的方式：对象中使用query的key作为传递方式
		传递后形成的路劲：/router?id=123
		使用：
		<!-- :to 绑定  对象：第一个参数：跳转  第二个参数：query对象里面要传递的查询参数 -->
		<router-link :to="{path:'me',query:{name:'张三',age:17}}">query 路由传参</router-link>
	   3.路由query接受传递过来的参数：
	     $route.query.name
		 $route.query.age
		 
    导航守卫（显示在浏览器上当前路由在哪一个title）
	    created: function() {
           // 主要用于网络请求
          console.log("created");
          document.title = '首页';
        },
	
	keep-alive
	记住某一个状态打开不被返回可使用导航守卫
	
	别名（可快速找到资源、组件）
	 buid文件下webpack.base.conf.js
	 
	  resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'assets': resolve('src/assets'),
            'components': resolve('src/components'),
            'views': resolve('src/views'),

        }
    },
	
	src使用前面必须加~ （<img src = "~assets/img/img2-actived.png">）
	 
		
	
	 
	 
	 
	 
	 
	 
	 
	 
	 
  
