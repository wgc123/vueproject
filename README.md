# vueproject
Vue学习笔记

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
  
