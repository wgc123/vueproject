<template>
  <!-- v-cloak 解析vue之前显示还是隐藏 -->
  <div class="hello" v-cloak>
    <ul >
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
    <br>

<!-- key 值不一样，在切换登录的时候就不会把user input值传给 email input 就会清空-->
    <span v-if="isUser">
      <label for="userName">用户账号</label>
      <input type="text" id="userName" placeholder="用户账号" key="userName" />
    </span>
    <span v-else>
      <label for="email">用户邮箱</label>
      <input type="text" id="email" placeholder="用户邮箱" key="email"/>
    </span>
    <button @click="isUser = !isUser">切换登录</button>
  <hr>

   <h5 v-show="isShow">{{showmessage}}</h5>
     
     <button @click="btnNext()">下一页</button>

  <router-link to='book'>
    <button>下一页</button>
    </router-link>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      showmessage:'v-show 条件判断',
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
    btnNext(){
      this.$router.push('book');
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
