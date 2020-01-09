<template>
    <div id="book">
        hjsadgfhjsd
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
        </table>

        <br>
         <router-link to="/hello">
         <button>上一页</button>
      </router-link>

    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
       
    }
}
</script>

<style >
    table {
        border: 1px solid #e9e9e9;
        border-collapse: collapse;
        border-spacing: 0;
    }

    th,td{
        padding: 8px 16px;
        border: 1px solid #e9e9e9;
        text-align: center;
    }
    th{
        background-color: #f7f7f7;
        color: #5c6b77;
        font-weight: 600;
    }
</style>
