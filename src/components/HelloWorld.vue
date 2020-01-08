<template>
  <div class="hello">
    <ul v-for="stu in list" :key="stu.id">
      <li>{{stu}}</li>
    </ul>

    <hr />

    <h3>当前计数：{{count}}</h3>
    <button @click="add()">+</button>
    <button @click="subtraction()">-</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
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
</style>
