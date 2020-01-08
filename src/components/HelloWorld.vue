<template>
  <!-- v-cloak 解析vue之前显示还是隐藏 -->
  <div class="hello" v-cloak>
    <ul v-for="stu in list" :key="stu.id">
      <li>{{stu}}</li>
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
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      bindmessage: "动态绑定属性 v-bind",
      imagePath:
        "https://img30.360buyimg.com/jdcms/s150x150_jfs/t1/55469/37/16502/288275/5dd79094E270080a8/cf3f5572a90fc912.jpg",
      baidu: "http://www.baidu.com",

      message: "v-text指令的使用",
      url: "<a>v-html指令的使用</a>",
      list: ["第一次使用vue", "vue v-for 的使用", "列表显示数据"],
      count: 0
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
    }
  },
  watch: {
    // 如果 `data里面定义的数据` 发生改变，这个函数就会运行
  }
};
</script>


<style scoped>
/* 如果在vue没有解析出来之前，就隐藏 */
[v-cloak] {
  display: none;
}
</style>
