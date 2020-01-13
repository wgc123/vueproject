<template>
  <!-- v-cloak 解析vue之前显示还是隐藏 -->
  <div class="hello" v-cloak>
    <ul>
      <li v-for="stu in list" :key="stu.id">{{stu}}</li>
    </ul>

    <h3>当前计数：{{count}}</h3>
    <button @click="add()">+</button>
    <button @click="subtraction()">-</button>

    <h5 v-text="message"></h5>
    <h5 v-html="url"></h5>
    <hr />
    <h5>{{bindmessage}}</h5>
    <!-- 使用v-bind动态绑定图片地址 可以简写 :-->
    <img v-bind:src="imagePath" alt />
    <a v-bind:href="baidu">百度一下</a>
    <!-- class 对象绑定 -->
    <!-- 第一种定义class对象绑定 -->
    <h5 v-bind:class="{activ:isActiv,line:isLine}">{{bindmessage}}</h5>
    <!-- 第二种定义class对象绑定 -->
    <h5 v-bind:class="getClass()">{{bindmessage}}</h5>
    <button @click="btnClick">按钮取反颜色</button>

    <!-- style属性绑定 -->
    <h5>{{stylemessage}}</h5>
    <!-- <h5 :style="{key(属性名)：value(属性值)}">{{}}</h5> -->
    <!-- 50px必须加上单引号，否则当成一个变量去解析 -->
    <h5 :style="{fontSize: '30px'}">{{stylemessage}}</h5>
    <!-- finalSize 当成一个变量使用 -->
    <h5 :style="{fontSize:finalSize}">{{stylemessage}}</h5>
    <h5 :style="{fontSize:finalSize,backgroundColor:finalColor}">{{stylemessage}}</h5>
    <h5 :style="getStyle()">{{stylemessage}}</h5>

    <!-- 计算属性 -->
    <h5>{{fillFullName}}</h5>
    <!-- 计算一个数组里面所有书的价格 -->
    <ul>
      <li v-for="book in books" :key="book.id">{{book.name}} --{{book.price}}</li>
    </ul>

    <h5>就算图书总价格：{{totalPrice}}</h5>

    <h5>这是一个get、set的计算属性 {{fullName}}</h5>
    <button>改变计算属性的firstname、lastname值</button>
    <hr />
    <!-- v-if  -->
    <!-- 没有设置key 默认input值是可以相互使用不会清空input里面的值 -->
    <span v-if="isUser">
      <label for="userName">用户账号</label>
      <input type="text" id="userName" placeholder="用户账号" />
    </span>
    <span v-else>
      <label for="email">用户邮箱</label>
      <input type="text" id="email" placeholder="用户邮箱" />
    </span>
    <button @click="isUser = !isUser">切换登录</button>
    <br />

    <!-- key 值不一样，在切换登录的时候就不会把user input值传给 email input 就会清空-->
    <span v-if="isUser">
      <label for="userName">用户账号</label>
      <input type="text" id="userName" placeholder="用户账号" key="userName" />
    </span>
    <span v-else>
      <label for="email">用户邮箱</label>
      <input type="text" id="email" placeholder="用户邮箱" key="email" />
    </span>
    <button @click="isUser = !isUser">切换登录</button>
    <hr />

    <h5 v-show="isShow">{{showmessage}}</h5>

    <hr />

    <!-- v-model -->
    <h5>{{modelmessage}}</h5>
    <!-- 第一种通过v-model绑定双向数据 -->

    <input type="text" v-model="modelmessage" />

<br>

<!-- 第二种 通过方法event事件改变数据 -->
   <input type="text"  :value="modelmessage" v-on:input="valueChage">


<hr>

<h5>{{raidomessage}}</h5>
<!-- 选择男、女 关键要设置他们相互互斥，不然单选按钮就可以选择多个 -->
<label for="male">
  <input type="radio" id="male" name="sex" value="男" v-model="sex">男
</label>
<label for="female">
  <input type="radio" id="female" name="sex" value="女" v-model="sex">女
</label>
<h5>你选择的性别为：{{sex}}</h5>

<hr>

<h5>{{checkboxmessage}}</h5>
<!-- 单选checkbox按钮 -->
<label for="agree">
  <input type="checkbox" id="agree"  v-model="isAgree" >同意协议
</label>

<h5>你是否选择同意协议：{{isAgree}}</h5>
<!-- disabled 不可点击  只有当点击同意协议的时候才可以点击下一步  所以取反 -->
<button :disabled="!isAgree">下一步</button>
<br>
<!-- 多选按钮 -->
<input type="checkbox" value="苹果" v-model="checkboxArr">苹果
<input type="checkbox" value="香蕉" v-model="checkboxArr">香蕉
<input type="checkbox" value="芒果" v-model="checkboxArr">芒果
<input type="checkbox" value="哈密瓜" v-model="checkboxArr">哈密瓜

<h5>你的喜欢的水果有：{{checkboxArr}}</h5>

<hr>
<h5>{{selectmessage}}</h5>
<select name="abc" v-model="fruit">
  <option value="苹果">苹果</option>
  <option value="香蕉">香蕉</option>
  <option value="芒果">芒果</option>
  <option value="哈密瓜">哈密瓜</option>
</select>
<h5>单选 你选择的水果是：{{fruit}}</h5>

<!-- multiple 多选 -->
<select name="abc" v-model="fruits" multiple>
  <option value="苹果">苹果</option>
  <option value="香蕉">香蕉</option>
  <option value="芒果">芒果</option>
  <option value="哈密瓜">哈密瓜</option>
</select>
<h5>多选 你选择的水果是：{{fruits}}</h5>

<br>

<h5>{{inputmessage}}</h5>
<!-- 值绑定CheckBox  -->
<label v-for="item in inputCheckbox" :key="item.id" :for="item">
  <input type="checkbox"  :value="item" :id="item" v-model="fruits">{{item}}
</label>

    <br />
    <br />
    <router-link to="/book">
      <button>下一页</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      inputmessage:'input 值绑定',
      inputCheckbox:['11','22','33','44'],
      selectmessage: 'select 结合v-model使用',
      fruit:'香蕉',
      fruits:[],

      checkboxmessage:'checkbox 结合v-model使用',
      isAgree: false,   // 是否同意协议
      checkboxArr:[], //保存喜欢的水果
      raidomessage:'v-model结合raido使用单选按钮',
      sex:'男',
      modelmessage: "v-model 双向数据绑定",
      showmessage: "v-show 条件判断",
      isShow: true,
      isUser: true,
      firstName: "继续",
      lastName: "呵呵",
      stylemessage: "动态绑定属性 style",
      finalSize: "30px",
      finalColor: "red",
      bindmessage: "动态绑定属性 class对象",
      imagePath:
        "https://img30.360buyimg.com/jdcms/s150x150_jfs/t1/55469/37/16502/288275/5dd79094E270080a8/cf3f5572a90fc912.jpg",
      baidu: "http://www.baidu.com",
      // 通过class对象绑定v-bind
      isActiv: true,
      isLine: true,
      message: "v-text指令的使用",
      url: "<a>v-html指令的使用</a>",
      list: ["第一次使用vue", "vue v-for 的使用", "列表显示数据"],
      count: 0,
      books: [
        { id: 1, name: "unix 编程艺术", price: 102 },
        { id: 2, name: "代码大全", price: 192 },
        { id: 3, name: "深入理解计算机原理", price: 2 },
        { id: 4, name: "现代系统", price: 112 }
      ]
    };
  },
  created: function() {
    // 主要用于网络请求
    console.log("created");
    document.title = '首页';
  },
  mounted: function() {
    console.log("mounted");
  },
  beforeCreate: function() {
    console.log("beforeCreate");
  },
  methods: {
    // 所有的方法都放进这个里面
    add() {
      this.count++;
    },
    subtraction() {
      this.count--;
    },
    btnClick: function() {
      this.isActiv = !this.isActiv;
    },
    // 定义好class显示文件样式
    getClass: function() {
      return { activ: this.isActiv, line: this.isLine };
    },
    getStyle: function() {
      return { fontSize: this.finalSize, backgroundColor: this.finalColor };
    },
    valueChage(event){
      this.modelmessage = event.target.value;
    }
  },
  watch: {
    // 如果 `data里面定义的数据` 发生改变，这个函数就会运行
  },

  computed: {
    //计算属性

    // get set 属性 一般计算属性只有get属性
    fullName: {
      set: function(valueName) {
        //  split 字符串分割
        let name = valueName.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
      },
      get: function() {
        return this.firstName + " " + this.lastName;
      }
    },

    fillFullName() {
      //组合第一个名字和最后的名字相互连接 组合连接数据显示
      return this.firstName + " " + this.lastName;
    },

    totalPrice: function() {
      let result = 0;
      for (let i = 0; i < this.books.length; i++) {
        result += this.books[i].price;
      }
      return result;
    }
  }
};
</script>


<style scoped>
/* 如果在vue没有解析出来之前，就隐藏 */
[v-cloak] {
  display: none;
}
.activ {
  color: red;
}
</style>
