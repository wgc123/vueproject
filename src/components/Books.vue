<template>
  <div id="book">
   
   <div v-if="list.length">
        <table>
      <thead>
        <tr>
          <th></th>
          <th>书籍名称</th>
          <th>出版日期</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in list" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.date}}</td>
          <!-- 显示价钱的方法 第一种 通过methods方法-->
          <!-- <td>{{getFilalPrice(item.price)}}</td> -->
          <!-- 显示价钱的方法 第二种 使用filters过滤器 |-->
          <td>{{item.price | showPrice}}</td>
          <td>
              <!-- 加 -->
              
            <button @click="add(index)" >+</button>
            {{item.count}}
            <!-- 减  disabled 不可点击-->
            <!-- 当大于1时可以操作 等于或者小于1时不可点击 -->
            <button @click="subtract(index)" v-bind:disabled="item.count <= 1">-</button>
          </td>
          <td>
            <button @click="removeBtn(index)">移除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h2>总计：{{totalPrice | showPrice}}</h2>
   </div>

<h2 v-else>图书馆为空</h2>
    <br />
    <router-link to="/hello">
      <button>上一页</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "算法寻轮",
          date: "2016-06-19",
          price: 88.00,
          count: 1
        },
        {
          id: 2,
          name: "Android 入门到精通",
          date: "2019-06-19",
          price: 56.00,
          count: 1
        },
        {
          id: 3,
          name: "微信小程序",
          date: "2018-06-09",
          price: 89.00,
          count: 1
        },
        {
          id: 4,
          name: "css 样式",
          date: "2016-06-19",
          price: 34.0,
          count: 1
        }
      ]
    };
  },
  methods: {
    getFilalPrice(price) {
      //   toFixed 保留2位小数
      return "￥" + price.toFixed(2);
    },
    add(index){
        this.list[index].count ++;
    },
    subtract(index){
        this.list[index].count --;
    },
    removeBtn(index){
        // 删除当前选中的这一条数据
        this.list.splice(index,1);
    }
  },
  computed:{ // 计算属性
    totalPrice(){
        let finalPrice = 0;
        for (let i = 0; i < this.list.length; i++) {
            // 价格 * 选中的条数
            finalPrice += this.list[i].price * this.list[i].count;
        }
        return finalPrice;
    }
  },

  filters: {
    // 过滤器
    showPrice(price) {
      return "￥" + price.toFixed(2);
    }
  }
};
</script>

<style >
table {
    width: 100%;
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
}

th,
td {
  padding: 28px 4px;
  border: 1px solid #e9e9e9;
  text-align: center;
  color: 12px;
}
th {
  background-color: #f7f7f7;
  color: #5c6b77;
  font-weight: 100%;
  font-size: 12px;
}
</style>
